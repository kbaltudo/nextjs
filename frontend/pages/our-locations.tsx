import Head from "next/head";
import Layout from "../components/PageStructure/Container/Layout";
import LocationSidebar from "../components/Composits/Location/LocationSidebar";
import LocationMap from "../components/Composits/Location/LocationMap";
import { strapiPageTemplate, strapiLocations , strapiLocationPage } from '../lib/provider/strapi/api'
import ContainerFluid from "../components/PageStructure/Container/ContainerFluid";
import { useState, useEffect } from "react";

const OurLocation = ({ pageResponse, locationResponse , pageTemplate }) => {
  const [lattitude, setLattitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const updateMapData = ( lat, long ) => {
    setLattitude(lat);
    setLongitude(long);
  }
  useEffect(() => {
    const location = locationResponse ? locationResponse[0] : "";
    updateMapData(location.lattitude,location.longitude);
  }, [locationResponse])

  const data = {      
    title : (pageResponse?.Title) ? pageResponse.Title : "Locations Page"
  } 

  return (
    <Layout header={pageTemplate}>
      <Head>
        <title>{data.title}</title>
      </Head>
      <ContainerFluid>
        <div className="row">
        <LocationSidebar locations={locationResponse} updateMapData={updateMapData} title={pageResponse.subTitle} />
        <LocationMap locations={locationResponse} lattitude={lattitude} longitude={longitude} />
        </div>
      </ContainerFluid>
    </Layout>
  );
};

export default OurLocation;

export async function getStaticProps() {
  const pageTemplate = [],
  pageResponse = [],
  locationResponse = [];
  return {
    props: {
      pageTemplate,
      pageResponse,
      locationResponse
    }
  }
}