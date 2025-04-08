import React from "react";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from "../src/landing_page/home/Hero";
import Signup from "../src/landing_page/signup/Signup"

describe('Hero Component', ()=>{
    test("renders hero image", ()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", 'media/images/homeHero.png');
    });

    test("renders signup button", ()=>{
        render(<Signup />);
        const signupButton = screen.getByRole("button", {name:"/signup now/i"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});