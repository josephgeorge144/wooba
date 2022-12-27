import React from 'react'
import styled from "styled-components";
import './reserve.css'





function Resergame({}) {
    document.body.style.backgroundColor = "#e5e5e5";
    document.body.style.margin = "0";
  return (
    
     <NewRootRootRootRoot className='newRootRootRootRoot'>
      <BlackBack className='blackBack'>
        <Icon className='icon' src={`https://file.rendit.io/n/TqLFZpwrDWrUxptWw2td.svg`} />
        <Blur1 className='blur1'>
          <NewGroup className='newGroup'>
            <Title className='title'>Want to have it in your pocket?</Title>
            <Group2 className='group2'>
              <Title1 className='title1'>
                Reserve your gamename now and we’ll notify you as soon as the
                app is available for downloading
              </Title1>
              <Ellipse className='ellipse'>
                <Text4 className='text4'>i</Text4>
              </Ellipse>
            </Group2>
          </NewGroup>

           <Form1 className='form1' >
            <WhiteFlexColumn className='whiteFlexColumn '>
              <Text5 className='text5'>sdthr</Text5>
          
               
            </WhiteFlexColumn>
            <WhiteFlexColumn1 className='whiteFlexColumn1'>
              <Text5>Gamename</Text5>
            </WhiteFlexColumn1>
            <Title5>
              By clicking “RESERVE”, you acknowledge that you have read and
              understood, and agree to{" "}
              <Title2>WOOOBA's Terms & Conditions</Title2>
              <Title3 className='title3 '> and </Title3>
              <Title2>Privacy Policy</Title2>
            </Title5>
            <button className='orangeFlexColumn'>
              <Text7 className='text7'>Reserve</Text7>
            </button>
          </Form1>

          

          

        </Blur1>
      </BlackBack>
    </NewRootRootRootRoot>
  );
};

const Text5 = styled.div`
  font-size: 24px;
  font-family: Bebas Neue;
  text-align: center;
  white-space: nowrap;
  letter-spacing: 1.2px;
  
`;

const Title2 = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
  text-decoration: underline;
`;
const NewRootRootRootRoot = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
`;
const BlackBack = styled.div`
  width: 100%;
  height: 10%;
  overflow: hidden;
  
  position: relative;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  
`;
const Icon = styled.img`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
 
  left: 100px;
  top: 100px;
  position: absolute;


`;
const Blur1 = styled.div`
  width: 100%;
  position: relative;
  gap: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;





  
  align-items: center;
  padding: 281px 0px 647px 0px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
`;
const NewGroup = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 717px;
  color: #ffffff;
  font-size: 72px;
  font-weight: 700;
  font-family: Montserrat;
  text-transform: uppercase;
`;
const Group2 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Title1 = styled.div`
  width: 677px;
  color: #efefef;
  font-size: 24px;
  font-weight: 700;
  font-family: Montserrat;
`;
const Ellipse = styled.div`
  height: 29.6px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0.19px 10.7px 0.19px 10.3px;
  background-size: cover;
  background-image: url("https://file.rendit.io/n/VzTD60DET4J4mUmu5Kei.svg");
`;
const Text4 = styled.div`
  color: #ffffff;
  font-size: 26.5px;
  font-weight: 700;
  font-family: Montserrat;
  line-height: 26.47058868408203px;
  text-align: center;
  white-space: nowrap;
`;
const Form1 = styled.div`
  height: 380px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
`;
const WhiteFlexColumn = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 21px 588px 20px 20px;
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
  color:gray;
`;
const WhiteFlexColumn1 = styled.div`
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 21px 546px 20px 20px;
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
  color:gray;
`;
const Title5 = styled.div`
  width: 657px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
  white-space: pre-wrap;
`;
const Title3 = styled.div`
  display: contents;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
  white-space: pre-wrap;
`;
const OrangeFlexColumn = styled.div`
  height: 50px;
  gap: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 289px;
  border-radius: 8px;
  background-color: #f4511e;
`;
const Text7 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  font-family: Montserrat;
  white-space: nowrap;
  text-transform: uppercase;
`;

    



     
    
  


export default Resergame