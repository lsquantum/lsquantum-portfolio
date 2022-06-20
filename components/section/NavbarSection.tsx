import { AppConfig } from "../../config/AppConfig";
import { Section } from "../layout/Section";
import NavbarLink from "../navigation/NavbarLink";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "../logo/Logo";
import ToggleTheme from "../theme/ToggleTheme";

function NavbarSection() {
    return (
        <Section yPadding="py-4">
            <NavbarTwoColumns logo={<Logo xl />}>
                {AppConfig.navBarLinks.map((item, i) => {
                    return (<NavbarLink key={i} text={item.text} link={item.link} />);
                })}
                <ToggleTheme />
            </NavbarTwoColumns >
        </Section >
    );
}

export default NavbarSection;