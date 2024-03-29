import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;

}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
    className={`font-mulish flex flex-col pt-4 pb-4 gap-3 sm:flex-row   ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {icon && <Image src={icon}  alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button