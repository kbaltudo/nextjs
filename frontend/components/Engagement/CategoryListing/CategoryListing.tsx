import Link from "next/link";
import Styles from "./CategoryListing.module.scss";
import { GetCategories } from "./GetCategoryListingData";
import { Key } from "react";

const CategoryListing = ({ content }) => {
  const category = GetCategories(content);  
  return (
    <section className={Styles.categoryListing + " ps-md-3 pt-3 pb-3"}>
      <h2 className="category-heading">{category.title} </h2>
      <div className="categories-wrap">
        {category.map((
            category: { title: any; description: any; slug: any; id:any },
            index: Key
          )  => (
              <div
                key={index}
                className={Styles.categoryv1 + "category-wrap pb-2"}
              >
                <Link href={"/listing/" + category.slug}>
                  <a className="text-decoration-none text-secondary fw-bold">
                    {category.title}
                  </a>
                </Link>
              </div>
            ))
          }
      </div>
    </section>
  );
};

export default CategoryListing;
