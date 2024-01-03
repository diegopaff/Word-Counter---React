type warningProps = {
  warningText: string;
};

function Warning({ warningText }: warningProps) {
  return <p className="warning">{warningText}</p>;
}

export default Warning;
