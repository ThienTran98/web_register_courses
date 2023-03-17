import React from "react";
import { Desktop, Mobile, Tablet } from "../../../HOC/responsive";
import Top_Header_Desktop from "./Top_Header_Desktop";
import Top_Header_Mobile from "./Top_Header_Mobile";
import Top_Header_Tablet from "./Top_Header_Tablet";

export default function Top_Header() {
  return (
    <div>
      <Desktop>
        <Top_Header_Desktop />
      </Desktop>
      <Tablet>
        <Top_Header_Tablet />
      </Tablet>
      <Mobile>
        <Top_Header_Mobile />
      </Mobile>
    </div>
  );
}
