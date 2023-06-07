import Picker from 'emoji-picker-react';
import React, { useState } from 'react';
import parser from 'html-react-parser';

const previewConfig = {
  showPreview: false,
};

const Emoji = ({ description, setDescription }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    // console.log(parser(emojiObject.srcElement));
    console.log(chosenEmoji.srcElement);
    setDescription(description + parser(`${emojiObject.srcElement}`));
    console.log(description);
  };

  return (
    <div className="z-[99999]">
      <Picker
        onEmojiClick={onEmojiClick}
        width={300}
        height={350}
        skinTonesDisabled={true}
        previewConfig={previewConfig}
      />
    </div>
  );
};

export default Emoji;
