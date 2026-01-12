import AppLogoIcon from './app-logo-icon';
import Logo from "../../assets/logo1.png";

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                {/* <AppLogoIcon className="size-5 fill-current text-white dark:text-black" /> */}
              {/* <img src={Logo} alt="Pk-Hotel Logo" style={{ height: "80px", width: "90px", }}/> */}
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    P-K Hotel & Suite
                </span>
            </div>
        </>
    );
}
