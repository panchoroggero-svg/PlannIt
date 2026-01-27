type IosHeaderProps = {
  title: string;
  rightAction?: React.ReactNode;
};

export default function IosHeader({
  title,
  rightAction,
}: IosHeaderProps) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="h-11 px-4 flex items-center justify-between">
        <h1 className="text-[17px] font-semibold tracking-tight text-black">
          {title}
        </h1>
        <div>{rightAction}</div>
      </div>
    </header>
  );
}
