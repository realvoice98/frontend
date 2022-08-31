import React, { useState, useEffect } from 'react';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { RatingStars } from '../../RatingStars';
import {useSelector} from "react-redux";
import Loading2 from './Loading2';

function GosuList({ setReviewLength }) {
    const [gosuLists, setGosuLists] = useState([]);
    useEffect(() => {
        fetch(`/matchedgosulist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('access_token'),
            },
            body: JSON.stringify(
                {email: localStorage.getItem('email')}
            )
        })
            .then(res => res.json())
            .then((res)=>  {
                console.log(res);
                setGosuLists(res)
            });
    }, []);
    const [userLists, setUserLists] = useState([]);
    const params = useParams();
    const user_info = useSelector((state) => state.user.user);
    // const { pathname } = location;
    const history = useHistory();
    useEffect(() => {
        fetch(`/matchedList`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem('access_token'),
            },
            body: JSON.stringify(
                {email: localStorage.getItem('email')}
            )
        })
            .then(res => res.json())
            .then(res => {
                console.log(localStorage.getItem('email'))
                console.log(res)
                setUserLists(res)
            });
    }, []);

    const goToGosuDetail = id => {
        window.location.href = `/GosuInfo/${id}`;
    };
    const goToUserDetail = id => {
        window.location.href = `/GosuInfoDetail/${id}`;
    };
    return (
        <>
            {
                user_info &&
                <>
                    {user_info.role == 'ROLE_USER' ? <>
                        {
                            gosuLists.length != 0 ? (<>
                                    {
                                        gosuLists[0].listNull != 101 ? (<GosuListWrap>
                                            {gosuLists.map((gosuList, i) => {
                                                const {
                                                    image,
                                                    gosuGender,
                                                    gosuName,
                                                    gosuAge,
                                                    gosuRegion,
                                                    gosuCareer,
                                                    id,
                                                    gosuCategory,
                                                } = gosuList;
                                                console.log(gosuList);
                                                return (
                                                    <FindGosu
                                                        key={i}
                                                        gosuName={gosuName}
                                                        onClick={() => {goToGosuDetail(id);
                                                        localStorage.setItem('id2',i+5)}}
                                                    >
                                                        <GosuListImg alt="고수 리스트 사진" src={`/images/winter${i+5}.jpg`}/>
                                                        <GosuListForm>
                                                            <GosuListTitle>{gosuName}</GosuListTitle>
                                                            <GosuListContent>전문가 나이 :{gosuAge}</GosuListContent>
                                                                {gosuRegion && (<>
                                                                        <GosuListComment>전문가의 성별 : {gosuGender}</GosuListComment>
                                                                    <GosuListComment>전문가의 경력 : {gosuCareer}</GosuListComment>
                                                                    <GosuListComment>전문가의 지역 : {gosuRegion}</GosuListComment>
                                                                    <GosuListComment>전문가의 카테고리 : {gosuCategory}</GosuListComment>

                                                                    </>
                                                                )}
                                                        </GosuListForm>
                                                    </FindGosu>
                                                );
                                            })}
                                        </GosuListWrap>):(<GosuListTitle>매칭된 전문가 리스트가 없습니다.</GosuListTitle>)
                                    }
                                </>)
                                : (<>
                                    <Loading2 />
                                </>)
                        }</> : <>
                        {userLists.length != 0 ?(<>
                                {
                                    userLists[0].id != 101 ?
                                        (<GosuListWrap>
                                            {userLists.map((gosuList, i) => {
                                                const {
                                                    image,
                                                    name,
                                                    age,
                                                    region,
                                                    career,
                                                    id,
                                                    category,
                                                } = gosuList;
                                                return (
                                                    <FindGosu
                                                        key={i}
                                                        name={name}
                                                        onClick={() => goToUserDetail(id)}
                                                    >
                                                        <GosuListImg alt="유저 리스트 사진" src={`/images/winter${i+6}.jpg`}/>
                                                        <GosuListForm>
                                                            <GosuListTitle>{name}</GosuListTitle>
                                                            <GosuListContent>유저가 원하는 전문가 나이 :{age}</GosuListContent>
                                                            {region && (<>
                                                                    <GosuListComment>유저가 원하는 경력 : {career}</GosuListComment>
                                                                    <GosuListComment>유저가 원하는 지역 : {region}</GosuListComment>
                                                                    <GosuListComment>유저가 요청한 카테고리 : {category}</GosuListComment>
                                                                </>
                                                            )}
                                                        </GosuListForm>
                                                    </FindGosu>
                                                );
                                            })}
                                        </GosuListWrap>):
                                        (<GosuListTitle>매칭된 유저 리스트가 없습니다.</GosuListTitle>)
                                }
                            </>)
                            : (<>
                                <Loading2 />
                            </>)
                        }
                    </>
                    }</>
            }
        </>
    );
}

export default GosuList;

const GosuListWrap = styled.div`
  width: 100%;
  padding: 0 0 1rem;
  border: none;
  border-radius: 5px;
`;

const FindGosu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #f4f4f4;
  &:hover {
    background: rgb(248, 248, 248);
    box-shadow: rgb(248 248 248) -24px 0px 0px 0px,
      rgb(248 248 248) 24px 0px 0px 0px;
    cursor: pointer;
  }
`;

const GosuListImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const GosuListForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const GosuListTitle = styled.h2`
  font-size: 20px;
  font-weight: bolder;
`;

const GosuListContent = styled.p`
  margin-top: 20px;
  color: gray;
`;

const GosuListReviewForm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const GosuListStar = styled.div`
  margin-left : 10px;
  font-size: 15px;
`;

const GosuListHire = styled.h2`
  margin-left: 10px;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bolder;
`;

const GosuListComment = styled.h3`
  margin-top: 20px;
  font-size: 15px;
  color: gray;
`;