import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import EmojiLogo from '../assets/svgexport-17.svg';
import Image from 'next/image';
import { useCallback } from 'react';
import Link from '@tiptap/extension-link';

import {
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl,
  FaUnderline,
  FaLink,
} from 'react-icons/fa';

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
    <div className="flex items-center justify-between p-[2px] mx-3 mt-3 rounded-lg bg-[#f4f4f4]">
      <div className="flex  items-center   gap-3  mb-0 mx-1">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaBold className="w-3 h-3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaItalic className="w-3 h-3" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={
            editor.isActive('underline')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaUnderline className="w-3 h-3" />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaListUl className="w-3 h-3" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaListOl className="w-3 h-3" />
        </button>
        <button
          onClick={setLink}
          className={
            editor.isActive('link')
              ? 'bg-black/[5%] p-2 rounded-lg'
              : 'hover:bg-black/[5%] p-2 rounded-lg'
          }>
          <FaLink className="w-3 h-3" />
        </button>
      </div>
      <div className="h-full flex items-center justify-center p-2 rounded-lg hover:bg-black/[5%] relative">
        <button>
          <Image src={EmojiLogo} alt="emojiicon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const Tiptap = ({ setDescription }) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      Link.configure({ types: [ListItem.name] }),
      Underline.configure({ types: [ListItem.name] }),
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
    content: ``,
    onUpdate: ({ editor }) => {
      setDescription(editor.getHTML());
    },
  });

  return (
    <div className="w-full bg-white border-[1px] rounded-lg border-black">
      <MenuBar editor={editor} className="menubar" />
      <EditorContent editor={editor} className="" />
    </div>
  );
};

export default Tiptap;
