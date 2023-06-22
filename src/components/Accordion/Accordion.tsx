import { useState } from "react";

interface Props {
  titleCard: string;
  children: React.ReactNode;
}

export const Accordion = ({ titleCard, children }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <h3>{titleCard}</h3>
        <button onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"}
        </button>
      </div>
      {open ? <div>{children}</div> : null}
    </>
  );
};
