import React from 'react';
import Radium from 'radium';
import { Link as ReactRouterLink } from 'react-router';
const Link = Radium(ReactRouterLink);

const SingleUser = (props) => {
    const styles = {
        thumbnailStyle: {
            cursor: "pointer",
            borderRadius: 0,
            border: "none",
            padding: "15px",
            background: "#EFF0F2",
            transition: "boxShadow .3s ease-in-out",
            boxShadow: "1px 1px 1px #ecf0f1",
            boxSizing: "border-box",
            minHeight: "200px",
            ":hover": {
                boxShadow: "3px 3px 3px lightgrey",
                // transform: "scale(1.01)"
                textDecoration: "none",
                cursor: "pointer"
            }
        },
        singleUserStyle: {
            // padding: "0 8px",
        },
        nameStyle: {
            color:"#F05A50",
            opacity: 0.5,
            marginTop: 0,
            textDecoration: "none"
        },
        hrStyle: {
            margin: 0,
        },
        textStyle: {
            textDecoration: "none"
        },
        detail: {
            textDecoration: "none",
            transition: "display .5s ease-in-out",
            padding: "10px",
            color: "black"
        }
    };
    return (
        <Link to={`/userDetail/${props.user._id}`} key={props.index} style={styles.textStyle}>
            <div className="" style={styles.singleUserStyle} key={props.index + 2}>
                <div className="thumbnail" style={styles.thumbnailStyle} key={props.index + 3}>
                    <img src={props.user.image} alt="..."/>
                    <div className="caption">
                        <h4 className="text-center" style={styles.nameStyle}>{props.user.bio.firstName} {props.user.bio.lastName}</h4>
                        <hr style={styles.hrStyle}/>
                        <h4>{props.user.category}</h4>
                        <span style={styles.textStyle}>Job Title | @companyName</span>
                    </div>
                    <div className="detail" style={styles.detail} key={props.index + 1}>
                        <span>{props.user.email}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default SingleUser;
