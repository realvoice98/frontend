import React, { useState } from 'react';
import styled from 'styled-components';

import GosuOverview from './GosuOverView';
import GosuNav from './GosuNav';
import GosuInfoBox from './GosuInfoBox';
// import GosuPhotos from './GosuPhotos';
import GosuReviews from './GosuReviews';
import GosuFAQ from './GosuFAQ';

function GosuMainSection({ introduction,setIntroduction,quotationPrice,setQuotationPrice,gosuDetails, gosuInfo }) {
    const [closed, setClosed] = useState({
        desc: false,
        media: false,
        review: false,
    });

    // const handleMoreBtn = name => {
    //     setClosed({ [name]: !closed[name] });
    // };

    return (
        <GosuInfo>
            <GosuOverview gosuDetails={gosuDetails} />
            <GosuNav reviewNum={gosuDetails.review_counts} />
            <GosuInfoBox
                gosuDetails={gosuDetails}
                // handleMoreBtn={handleMoreBtn}
                closed={closed}
                introduction={introduction}
                setIntroduction={setIntroduction}
                quotationPrice={quotationPrice}
                setQuotationPrice={setQuotationPrice}
            />
            {/*<GosuPhotos*/}
            {/*    uploadedImg={gosuInfo.uploaded_image}*/}
            {/*    // handleMoreBtn={handleMoreBtn}*/}
            {/*    closed={closed}*/}
            {/*/>*/}
            {/*{gosuInfo.length !== 0 && (*/}
            {/*    <GosuReviews*/}
            {/*        gosuDetails={gosuDetails}*/}
            {/*        gosuInfo={gosuInfo}*/}
            {/*        // handleMoreBtn={handleMoreBtn}*/}
            {/*        closed={closed}*/}
            {/*    />*/}
            {/*)}*/}
            <GosuFAQ />
        </GosuInfo>
    );
}

const GosuInfo = styled.div`
  display: block;
  max-width: 800px;
`;

export default GosuMainSection;