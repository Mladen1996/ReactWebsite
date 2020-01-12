import React from 'react';
import styled from 'styled-components';

 const Container = styled.section`
background:url(${props => props.src});
background-size:cover;
background-position:center;
height:226px;
width:100%;
margin-top:100px !important;

@media (max-width: 992px) {
    margin-top:0 !important;
}

@media (max-width: 768px) {
    height:150px;
}
`;

 const Text= styled.div`
padding:60px 0;
width:80%;
margin:0 auto;

@media (max-width: 768px) {
    padding:30px 0;
    width:90%;
}
`;

 const Heading= styled.div`
font-size: 3.6rem;
font-weight: 500;
margin-bottom: 5px;
line-height: 1.4;
color:white;
font-family: 'Open Sans', sans-serif;
@media (max-width: 768px) {
    font-size:2.6rem;
}
`;

 const SubHeading= styled.div`
font-size:1.6rem;
color:white;
font-family: 'Open Sans', sans-serif;
`;

const HeaderOtherPage = ({otherHeaderHeading,otherHeaderSubheading,image}) => (

            <Container id="HeaderWrapper" src={image}>
                <Text>
        <Heading>{otherHeaderHeading}</Heading>
        <SubHeading>{otherHeaderSubheading}</SubHeading>
                </Text>
            </Container>

        );


export default HeaderOtherPage;
