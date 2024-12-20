const TagButton = ({ href = "#0", text }: { href?: string; text: string }) => {
  return (
    <a
      href={href}
      className="bg-gray-light mb-3 mr-3 inline-flex items-center justify-center rounded-[4px] px-4 py-2 text-sm text-black duration-300 hover:bg-primary hover:text-white   "
    >
      {text}
    </a>
  );
};

export default TagButton;
