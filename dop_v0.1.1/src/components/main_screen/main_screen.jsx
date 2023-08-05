import React from 'react'
import profile from '../../assets/profile_pic.png'
import jisoo1 from '../../assets/jisoo1.jpg'
import modiji from '../../assets/modi.jpeg'
import kopichan from '../../assets/kopichan.png'
import './main_screen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { faFaceLaughWink } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'


const main_screen = () => {
  return (
    <div class="wrapper">

        <div class="container_screen">
            <div class="main_scr">

                <div class="left_mscr">

                    <div class="model_page">
                        
                    </div>
                    <div class="model_title">
                        <h2 id="post_title">Low poly Taj Mahal</h2>

                        <div class="title_parts">

                            <div class="left_title_part">
                            
                                <div class="profile_part">
                                    <img id="profile_logo" src= {profile} alt="" />
                                    <div class="profile_power">
                                        <h3 id="profile_name">puraify.3d</h3>
                                        <h4 id="profile_followers">100M followers</h4>
                                    </div>
                                </div>
                                <div id="follow_btn">Follow</div>
                            </div>
                            
                            <div className="right_title-part">
                                <div className="btns" id="likings">
                                    <div className="like_with_count">
                                        <div id="like_btn">
                                            <FontAwesomeIcon icon={faHeart} bounce /><p>24K</p>
                                        </div>

                                        <div id="cline"></div>

                                        <div id="dislike_btn">
                                            <FontAwesomeIcon icon={faHeartCrack} fade />
                                        </div>
                                    </div>

                                    <div className="btns" id="sharing">
                                        <FontAwesomeIcon icon={faPaperPlane} />
                                        <p id="share_txt">Share</p>
                                    </div>

                                    <div className="btns" id="bookmarking">
                                        <FontAwesomeIcon icon={faBookmark} />
                                        <p id="bmk_txt">Save</p>
                                    </div>

                                    <div className="btns" id="mores">
                                        <FontAwesomeIcon icon={faEllipsisVertical} />
                                    </div>
                                </div>
                            </div>
    
                            {/* <div class="right_title_part">
    
                                <div class="btns" id="likings">
                                    <div class="like_with_count">
                                        <div id="like_btn"><p>24K</p></div>
                                    </div>

                                    <div id="cline"></div>
                                    <div id="dislike_btn"><i class="fa-solid fa-heart-crack fa-fade" style="color: #ffcce7; font-size: 2.5vh"></i></div>
                                </div>
    
                                <div class="btns" id="sharing">
                                    <i class="fa-solid fa-paper-plane" style="color: #8585ad; font-size: 2.5vh; margin-right: 1vh; margin-top: -1.2vh;"></i>
                                    <p id="share_txt">Share</p>
                                </div>
    
                                <div class="btns" id="bookmarking">
                                    <i class="fa-regular fa-bookmark" style="color: #183e32; font-size: 2.5vh; margin-right: 1vh; margin-top: -1.2vh;"></i>
                                    <p id="bmk_txt">Save</p>
                                </div>
    
                                <div class="btns" id="mores">
                                    <i class="fa-solid fa-ellipsis-vertical" style="color: #b6c957; font-size: 2.5vh; margin-top: -1.2vh;"></i>
                                </div>
                            </div> */}
    
                        </div> 

                    </div>
                    <div class="desc">
                        <div class="post_stats">
                            <p id="count">869,690<span> views</span></p>
                            <div id="date" >Jan 26, 2023</div>
                        </div>

                        <div class="desc_text">Blackpink is a South Korean girl group formed by YG Entertainment in 2016. The group consists of four members: Jisoo, Jennie, Rosé, and Lisa. Blackpink is one of the most popular K-pop groups in the world, with a large and dedicated fan base.

                            The group's name, Blackpink, is a combination of the words "black" and "pink". The "black" side represents their more mature, "girl crush" image, while the "pink" side represents their more cute and colorful image. Blackpink's music is a mix of genres, including pop, hip hop, and dance. Their songs are often catchy and upbeat, with powerful vocals and impressive dance moves.
                            
                            Blackpink has released two studio albums, Blackpink (2016) and The Album (2020). They have also released several EPs, including Square One (2016), Square Two (2016), Kill This Love (2019), and How You Like That (2020). Blackpink's music videos have been viewed billions of times on YouTube, and they have won numerous awards, including the Mnet Asian Music Award for Best Female Group (2017) and the Billboard Music Award for Top Social Artist (2019).
                            
                            Blackpink is a global phenomenon, and their popularity shows no signs of slowing down. They are one of the most successful K-pop groups of all time, and they continue to break records and set new trends.
                            
                            In addition to their music, Blackpink is also known for their fashion sense. They are often seen wearing stylish and trendy outfits, and they have collaborated with several fashion brands, including Chanel, Dior, and Saint Laurent. Blackpink is also popular on social media, and they have over 60 million followers on Instagram.
                            
                            Blackpink is an inspiration to many people around the world. They are strong, independent women who are breaking down barriers and stereotypes. They are also role models for young girls, and they show that anything is possible if you set your mind to it.
                            Here are some of Blackpink's most popular songs:
                            
                            <ul>
                                <li>"Ddu-Du Ddu-Du"</li>
                                <li>"Whistle"</li>
                                <li>"Kill This Love"</li>
                                <li>"How You Like That"</li>
                                <li>"Ice Cream"</li>
                                <li>"Lovesick Girls"</li>
                                <li>"Pretty Savage"</li>
                                <li>"Crazy Over You"</li>
                                <li>"Love To Hate Me"</li>
                            </ul>
                            
                            Blackpink is a force to be reckoned with. They are talented, stylish, and successful, and they are only just getting started.
                        </div>
                    </div>

                </div>

                <div class="right_mscr">

                    <div class="comments_sec">
                        <div class="my_comment">
                            <img id="profile_logo" src= {profile} alt="" />
                            <div class="my_comment_area">
                                {/* style="padding:0 1vh; padding-top: 1vh; width: 100%; border-radius: 15px; border: 0; border-bottom: 2px solid black; font-size: 14px;" */}
                                <textarea name="comment" id="my_comment_text" placeholder="Add a comment..." cols="60" rows="1" ></textarea>
                                <div class="my_comment_btns">
                                    {/* <i class="fa-regular fa-face-laugh-wink" style="font-size: 2.5vh; color: #000000; cursor: pointer; pointer-events: auto; margin-top: 1.2vh;"></i>*/}
                                    <FontAwesomeIcon icon={faFaceLaughWink} />
                                    <div class="comm_btns">
                                        <div id="cancel_comm">Cancel</div>
                                        <div id="conf_comm">Comment</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="other_comments">

                            <div class="user_comment">

                                <img id="profile_logo" src= {jisoo1.jpg} alt="" />
                                <div class="user_comment_area">
                                    <div class="uid_commTime">
                                        <p id="uid">@sooyaa__</p>
                                        <p id="comment_time">2 days<span> ago</span></p>
                                    </div>
                                    <p id="user_comm_text">Wow, awesome, i like how you set the stage lighting even its low poly...🔥</p>
                                    <div class="user_comment_btns">
                                        <div id="comm_likings">
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                            <p id="comm_like_cnt">6.2K</p> 
                                            <FontAwesomeIcon icon={faThumbsDown} />
                                        </div>
                                                                                
                                        {/* <div id="comm_likings">
                                            <i class="fa-regular fa-thumbs-up" style="color: #2a2b2d; font-size: 3vh;"></i>
                                            <p id="comm_like_cnt" style="font-size: 14px; margin-top: 0.7vh; margin-left: 0.5vh; font-weight: bold;">6.2K</p>                                    
                                            <i class="fa-regular fa-thumbs-down fa-flip-horizontal" style="color: #2a2b2d; font-size: 3vh; margin: 0 1.5vh;"></i>
                                        </div> */}
                                        
                                        <div id="reply_comm">Reply</div>
                                        
                                    </div>
                                </div>
    
                            </div>

                            <div class="user_comment">

                                <img id="profile_logo" src= {modiji} alt="" />
                                <div class="user_comment_area">
                                    <div class="uid_commTime">
                                        <p id="uid">@naremdramodi</p>
                                        <p id="comment_time">58 minutes<span> ago</span></p>
                                    </div>
                                    <p id="user_comm_text">Great low poly Taj Mahal model! I would suggest adding more detail to the minarets and domes.</p>
                                    <div class="user_comment_btns">
                                        <div id="comm_likings">
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                            <p id="comm_like_cnt">6.2K</p> 
                                            <FontAwesomeIcon icon={faThumbsDown} />
                                        </div>
                                        {/* <div id="comm_likings">
                                            <i class="fa-regular fa-thumbs-up" style="color: #2a2b2d; font-size: 3vh;"></i>
                                            <p id="comm_like_cnt" style="font-size: 14px; margin-top: 0.7vh; margin-left: 0.5vh; font-weight: bold;">8.6K</p>                                    
                                            <i class="fa-regular fa-thumbs-down fa-flip-horizontal" style="color: #2a2b2d; font-size: 3vh; margin: 0 1.5vh;"></i>
                                        </div> */}
                                        
                                        <div id="reply_comm">Reply</div>
                                        
                                    </div>
                                </div>
    
                            </div>

                            <div class="user_comment">

                                <img id="profile_logo" src= {kopichan.png} alt="" />
                                <div class="user_comment_area">
                                    <div class="uid_commTime">
                                        <p id="uid">@kopiyama_</p>
                                        <p id="comment_time">2 weeks<span> ago</span></p>
                                    </div>
                                    <p id="user_comm_text">素敵な低ポリゴンのタージ・マハル模型ですね！❤️
                                        ミナレットとドームにもう少しディテールを加えると良いと思います。
                                        #低ポリゴン #タージ・マハル #模型😊</p>
                                    <div class="user_comment_btns">
                                        <div id="comm_likings">
                                            <FontAwesomeIcon icon={faThumbsUp} />
                                            <p id="comm_like_cnt">6.2K</p> 
                                            <FontAwesomeIcon icon={faThumbsDown} />
                                        </div>
                                        {/* <div id="comm_likings">
                                            <i class="fa-regular fa-thumbs-up" style="color: #2a2b2d; font-size: 3vh;"></i>
                                            <p id="comm_like_cnt" style="font-size: 14px; margin-top: 0.7vh; margin-left: 0.5vh; font-weight: bold;">12.5K</p>                                    
                                            <i class="fa-regular fa-thumbs-down fa-flip-horizontal" style="color: #2a2b2d; font-size: 3vh; margin: 0 1.5vh;"></i>
                                        </div> */}
                                        
                                        <div id="reply_comm">Reply</div>
                                        
                                    </div>
                                </div>
    
                            </div>
                        </div>

                        
                    </div>

                    <div class="suggested_sec">

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default main_screen