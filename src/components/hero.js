import React from "react";
import { Container, Stack } from "react-bootstrap"
import {BsGithub, BsDiscord, BsPlug, BsFillLightningFill} from "react-icons/bs"
import ParticleMenu from "./particle";
export default function HeroMenu() {
    return <Container fluid>
        <Stack gap={2} className="hero col-md-5 mx-auto" align="center">
            <h1 id="hero-title">
                Discord Plug <BsPlug size={50}/>
            </h1>
            <h5 className="text-muted">
                Plug in your Discord Profile to GitHub and other forum sites
            </h5>
            <Stack direction="horizontal" gap={3} className="justify-content-center">
                <button className="create-btn btn-variant-blue">Plug <BsFillLightningFill style={{"marginLeft":"3px"}} size={20}/></button>{' '}
                <button className="create-btn btn-variant-gray">GitHub <BsGithub style={{"marginLeft":"3px"}} size={20}/></button>
                <button className="create-btn btn-variant-gray">Discord <BsDiscord style={{"marginLeft":"3px"}} size={20}/></button>
            </Stack>
            <ParticleMenu/>
        </Stack>
  </Container>
};