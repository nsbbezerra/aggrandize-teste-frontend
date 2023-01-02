import * as ToastPrimitive from "@radix-ui/react-toast";
import cx from "classnames";

interface Props {
  isOpen: boolean;
  close: (data: boolean) => void;
  title: string;
  content: string;
}

export default function Toast({ isOpen, close, content, title }: Props) {
  return (
    <ToastPrimitive.Provider>
      <ToastPrimitive.Root
        open={isOpen}
        onOpenChange={close}
        className={cx(
          "z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg",
          "bg-green-700 bg-opacity-90 backdrop-blur-sm",
          "radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right",
          "radix-state-closed:animate-toast-hide",
          "radix-swipe-end:animate-toast-swipe-out",
          "translate-x-radix-toast-swipe-move-x",
          "radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]",
          "focus:outline-none focus-visible:ring focus-visible:ring-sky-300 focus-visible:ring-opacity-75"
        )}
      >
        <div className="flex">
          <div className="w-0 flex-1 flex items-center pl-5 py-4">
            <div className="w-full radix">
              <ToastPrimitive.Title className="text-sm font-medium text-white">
                {title}
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="mt-1 text-sm text-zinc-100">
                {content}
              </ToastPrimitive.Description>
            </div>
          </div>
        </div>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}
