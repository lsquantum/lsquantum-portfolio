import { Section } from "../layout/Section";
import NavbarLink from "../navigation/NavbarLink";
import { NavbarTwoColumns } from "../navigation/NavbarTwoColumns";
import { Logo } from "../logo/Logo";
import ToggleTheme from "../theme/ToggleTheme";
import LanguageSelect from "../language/LanguageSelect";
import useLanguage from "../../hooks/useLanguage";

function NavbarSection() {
    const [languageItems] = useLanguage();
    return (
        <Section yPadding="py-4">
            <NavbarTwoColumns logo={<Logo xl />}>
                {languageItems.navBarLinks.map((item, i) => {
                    return (<NavbarLink key={i} text={item.text} link={item.link} />);
                })}
                <LanguageSelect />
                <ToggleTheme />
            </NavbarTwoColumns >
        </Section >
    );
}

export default NavbarSection;