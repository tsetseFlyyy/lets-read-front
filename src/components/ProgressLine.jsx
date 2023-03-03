import { Progress } from "antd";
import React from "react";
import { ProgressLabeledStyled } from "./styles";

const mockLabels = {
  middle: <em>180/200</em>,
};

export function ProgressLine(props) {
  return (
    <ProgressLabeledStyled>
      <Progress
        strokeWidth={12}
        percent={(props.progress / props.total_pages) * 100}
        showInfo={false}
      />
      <div className="label-middle">
        {props.progress}/{props.total_pages}
      </div>
    </ProgressLabeledStyled>
  );
}
