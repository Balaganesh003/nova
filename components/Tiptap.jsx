import React from 'react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import PlaceHolder from '@tiptap/extension-placeholder';
import Link from '@tiptap/extension-link';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback } from 'react';
import HardBreak from '@tiptap/extension-hard-break';
import EmojiLogo from '../assets/svgexport-17.svg';
// import EmojiPicker from 'emoji-picker-react';
import Image from 'next/image';

import {
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl,
  FaUnderline,
  FaLink,
} from 'react-icons/fa';
import Emoji from './EmojiPacket';

// bold italic underline unorderedList orderedList link emoji

const MenuBar = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-1 mx-3 mt-3 rounded-lg bg-[#f4f4f4]">
      <div className="flex h-8 items-center   space-x-3  mb-0">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-gray-300 p-2 rounded-lg'
              : 'hover:bg-gray-300 p-2 rounded-lg'
          }>
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-gray-300 p-2 rounded-lg'
              : 'hover:bg-gray-300 p-2 rounded-lg'
          }>
          <FaItalic />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive('underline')
              ? 'bg-gray-300 p-2 rounded-lg'
              : 'hover:bg-gray-300 p-2 rounded-lg'
          }>
          <FaUnderline />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList')
              ? 'bg-gray-300 p-2 rounded-lg'
              : 'hover:bg-gray-300 p-2 rounded-lg'
          }>
          <FaListUl />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList')
              ? 'bg-gray-300 p-2 rounded-lg'
              : 'hover:bg-gray-300 p-2 rounded-lg'
          }>
          <FaListOl />
        </button>
        <button
          onClick={setLink}
          className={
            editor.isActive('link')
              ? 'bg-gray-300 p-2 rounded-lg'
              : 'hover:bg-gray-300 p-2 rounded-lg'
          }>
          <FaLink />
        </button>
      </div>
      <div className="h-full flex items-center justify-center p-2 rounded-lg hover:bg-gray-300 relative">
        <button>
          <Image src={EmojiLogo} alt="emojiicon" />
        </button>
        <div className="absolute top-0 right-0 w-[10rem] z-[1000]">
          {/* <Emoji  /> */}
        </div>
      </div>
    </div>
  );
};

const CustomHardBreak = HardBreak.extend({
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.setHardBreak(),
    };
  },
});

const Tiptap = ({ setDescription }) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      Underline.configure({ types: [ListItem.name] }),
      Link.configure({ types: [ListItem.name] }),
      PlaceHolder.configure({
        placeholder: 'What are your thoughts on...',
      }),
      CustomHardBreak,
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: ` `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  return (
    <div className="w-full bg-white border-[1px] rounded-lg border-black">
      <MenuBar editor={editor} className="menubar" />
      <EditorContent editor={editor} className="outline-none " />
    </div>
  );
};

export default Tiptap;
