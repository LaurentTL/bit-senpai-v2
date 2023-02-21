// import { createContext, useState } from 'react';

// interface IModalContext {
//   title: string;
//   open: () => boolean;
// }

// const defaultValues: IModalContext = {
//   title: 'Not available',
//   open: () => false,
// };

// const ModalContext = createContext<IModalContext>(defaultValues);

// export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [open, setOpen] = useState(defaultValues.open());
//   return <ModalContext.Provider value={open}>{children}</ModalContext.Provider>;
// };
export {};
