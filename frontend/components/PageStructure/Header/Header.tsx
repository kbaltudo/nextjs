import Image from "next/image";
import LinkList from "../../Navigation/LinkList/LinkList";
import Slug from "../../Elements/Slug";
import Styles from "./Header.module.scss";
const Header = ({ content }) => {
  const data = {
    logo: content?.logo ? content.logo : "",
    navTitle: content?.primaryNavigation?.title
      ? content.primaryNavigation.title
      : "",
    linkList: content?.primaryNavigation
      ? content.primaryNavigation
      : [],
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Slug
            replaceclass
            className={Styles.logo + " navbar-brand"}
            href="#"
            type={undefined}
          >
            {data.logo ? (
              <Image
                src={data.logo.url}
                width={data.logo.width}
                height={data.logo.height}
                alt={data.logo.alternativeText}
              />
            ) : (
              ""
            )}
          </Slug>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarSupportedContent"
          >
            <form className="d-flexs d-none">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <LinkList content={data.linkList} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
