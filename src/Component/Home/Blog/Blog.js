import React from "react";
import './Blog.css'
import Data from "../../../Data";
import Blogpro from "./Blogpro";

const Blog = () =>{

    const blogitem = Data.blog.map((itembox)=>{
        return(
            <div className="col-lg-4 col-md-12">
                <Blogpro img={itembox.img} job={itembox.job} text={itembox.text}  des={itembox.des} />

            </div>
        )
    })


    return (
       <section className="Blog">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12">
                    <h2>BLOG</h2>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class
                        <br /> at a euismod mus ipsum vel ex finibus semper luctus quam.</p>

                </div>
            </div>

            <div className="row">
                {blogitem}
                
            </div>




        </div>

       </section>
    )
}
export default Blog