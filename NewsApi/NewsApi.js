import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import NewsContents from './newsContents';
// import ScocialNews from './ScocialNews';
import Footer from './Footer';

const NewsApi = () => {
    const [news, setnews] = useState([]);
    const [categaries,setCategaries] = useState('normal');
    // const[flag,setFlag] = useState(false);
    const categry = ['business','entertainment', 'general','health','science','sports','technology'] 
    
    const GetNewsApi = async () => {
        let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ac47b9c549144c17b90666133a344f35`);
        
        let res = await response.json();
        // console.log(res);
        setCategaries()
        let results =  res.articles.map((currElem,index) => {
            return (
                <div >    
                 <NewsContents text = {currElem} key={index} index = {index}/>
                  
                </div>
            );
        })
            
        //   console.log(data);
        setnews(results)
    }

    useEffect(() => {
        GetNewsApi()
    }, [])
    // console.log(news.data);
    // const SocialApi = async()=>{
    //     let response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-02-15&sortBy=publishedAt&apiKey=ac47b9c549144c17b90666133a344f35`);  
    //     let res = await response.json();
    //     let SocialResult = res.articles.map((elment,index)=>{
    //     return<ScocialNews textTwo = {elment}/>
    //     })
    //     // setSocial(SocialResult)
    //     console.log(res.articles[0]);
    // }
    return (
        <>
            <div className="main">
            <NavBar />
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{news}</div>
            </div>
         
            <Footer/>
        </>
    );
}
export default NewsApi;