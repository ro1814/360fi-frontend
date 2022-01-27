import React from 'react'
import DataFeedComponent from "../components/products/DataFeedComponent"
import EagleEyeComponent from "../components/products/EagleEyeComponent";
import CorporateActionsComponent from "../components/products/CorporateActionsComponent";
import ValueForMoneyComponent from "../components/products/ValueForMoneyComponent";
import BlackLittermanComponent from "../components/products/BlackLittermanComponent";
import EsgSfrdReportingComponent from "../components/products/EsgSfrdReportingComponent";
import CompetitiveAnalysisComponent from "../components/products/CompetitiveAnalysisComponent";


const ProductsAndServicesScreen = () => {
    return (
        <>
            <h1>hi, ProductPage here</h1>
            <DataFeedComponent/>
            <EagleEyeComponent/>
            <CorporateActionsComponent/>
            <ValueForMoneyComponent/>
            <BlackLittermanComponent/>
            <EsgSfrdReportingComponent/>
            <CompetitiveAnalysisComponent/>
        </>   
    )
}

export default ProductsAndServicesScreen