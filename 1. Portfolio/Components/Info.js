import React from "react";

export default function Info() {
    return (
        <div className="profile-info">
            <img src="https://wallpapercave.com/dwp2x/bS3sPsI.jpg" alt="Profile Picture" className="profile-pic"></img>
            <h1>Anonymous</h1>       
            <h3>Frontend Developer</h3>       
            <h4>anonymous.website</h4>       
            <div className="buttons">
                <div className="email-btn">
                    <i class="fas fa-envelope"></i>
                    <span>Email</span>
                </div>
                <div className="linkedin-btn">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </div>
            </div>
        </div>
    )
}