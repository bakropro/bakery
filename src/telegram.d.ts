export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initDataUnsafe?: {
          user?: {
            id: number;
            first_name?: string;
            last_name?: string;
            username?: string;
          };
        };
        requestContact?: (
          callback: (result: {
            responseUnsafe?: {
              contact?: {
                phone_number?: string;
              };
            };
          }) => void
        ) => void;
      };
    };
  }
}
