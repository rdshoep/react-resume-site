import React, {useEffect} from "react";
import SplitPane from "react-split-pane";
import Editor from "./Editor";
import View from "./View";
import "./Main.less";
import ColorPicker from "./ColorPicker";
import { handleWindowResize } from "@utils/window-event";
// import Shortcuts from "@src/components/Shortcuts";
// import OnePage from '@src/components/OnePage';
// import Preview from "@src/components/Preview";
// import HeaderBar from "@src/components/HeaderBar/index";

const Main = () => {
  useEffect(() => {
    handleWindowResize();
  });
  return (
    <div className="rs-container">
      <SplitPane split="vertical" minSize={450} maxSize={800} onChange={handleWindowResize}>
        <Editor></Editor>
        <View></View>
      </SplitPane>
      <ColorPicker></ColorPicker>
      {/* <Shortcuts></Shortcuts> */}
      {/* <OnePage></OnePage> */}
      {/* <Preview></Preview> */}
    </div>
  );
};

export default Main;
