import { Grid } from '@mui/material';
import * as React from 'react';
import styled from 'styled-components';

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px;
  align-items: center;
`;

const BackColor = styled.div`
  background  : #FDFCFA;
  height: 400px;
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  font-size:30px;
  margin: 0px;
  align-items: center;
  padding-top : 40px;
`;

const SubText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size:20px;
  color:#B5B5B4;
  width: 100%;
  padding-top : 50px;
  align-items: center;
`;

const ItemWrapper = styled.div`
  width : 1000px;
  padding-top: 40px;
  margin: 0 auto;
`;

const ItemBox = styled.div`
  padding-top:20px;
  width : 300px;
  height : 150px;

  text-align:center;
  float:left;
  margin : 0 10px;
`
const Text = styled.h1`
  font-size:50px;
  color:#ed6f63;
`;

const MiniText = styled.h1`
  padding-top :30px;
  font-size:20px;
  color:black;
`;

export default function Bottom() {
    return (
        <>
            <BackColor>
                <MainText>
                    수많은 고객님들이 전문가님을 기다립니다.
                    <SubText>
                        가장 많은 고객이 SOMEBODYHELPME에 있습니다. SOMEBODYHELPME에서 빠르고 편리하게 고객을 만나세요.
                    </SubText>
                </MainText>
                <ItemWrapper>
                    <ItemBox>
                        <Text>
                            9,941,032
                        </Text>
                        <MiniText>
                            누적 요청서
                        </MiniText>
                    </ItemBox>
                    <ItemBox>
                        <Text>
                            720,093
                        </Text>
                        <MiniText>
                            등록된 전문가
                        </MiniText>
                    </ItemBox>
                    <ItemBox>
                        <Text>
                            4.9 / 5점
                        </Text>
                        <MiniText>
                            평균 리뷰별점
                        </MiniText>
                    </ItemBox>

                </ItemWrapper>
            </BackColor>
        </>
    );
}
