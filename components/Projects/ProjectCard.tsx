import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import theme from "@/app/theme_emotion";

export const StyledProjectCard = ({ project, onClick }) => (
  <StyledBorder>
    <StyledLink onClick={() => onClick(project)}>
      <ImageProject>
        <ProjectInfo>
          <h3>{project.name}</h3>
          <div className="description">
            {" "}
            <Image
              src="/assets/decoration_logoe.png"
              alt="logo icon"
              width={75}
              height={75}
              className="project-image"
              key={project._id}
            />
          </div>
        </ProjectInfo>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={350}
          height={155}
          className="project-image"
          key={project._id}
        />

        {/* <StyledButton>
          <Link href={project.githubUrl}>
            <Image
              src="/assets/github.png"
              width={50}
              height={50}
              alt="github icon"
            />
          </Link>
          <Link href={project.url}>
            <Image
              src="/assets/website-3d-icon-.png"
              width={50}
              height={50}
              alt="github icon"
            />
          </Link>
        </StyledButton> */}
        <BoxTechnologies className="box-list-technologies">
          {project.technologies.map((technology, techIndex) => (
            <TechnologyItem className="single-technology" key={techIndex}>
              {technology}
            </TechnologyItem>
          ))}
        </BoxTechnologies>
      </ImageProject>
    </StyledLink>
  </StyledBorder>
);

const StyledBorder = styled.div`
  margin: 0 2rem;
  margin-bottom: 1rem;
  /* border: solid 5px #1d3b7a; */
  border-radius: 12px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

const StyledButton = styled.div`
  cursor: pointer;
  /* padding: 0.5rem 2rem; */
  position: absolute;
  left: 0;
  top: 0;
  margin-right: 12rem;
  a {
    padding: 0rem;
  }
  border-radius: 12px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  /* border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  border: solid 5px #1d3b7a; */
  /* border-left: none; */
  /* margin-right: -1rem; */
  margin-top: -0.5rem;
  padding: 1rem;
  padding-left: 0rem;
  font-size: 1.5rem;
  font-weight: 600;
  /* background-color: #f8e97d; */
  background-color: #fff;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  margin: 1rem;
  background-color: #f9f9f9;
  border-radius: 1rem;
  overflow: hidden;

  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 48rem) {
    width: calc(100% / 2);
  }

  @media (min-width: 62rem) {
    width: calc(100% / 3.4);
  }
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  padding-bottom: 2rem;
`;

const ImageProject = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
  width: 24.2rem;
  height: 18rem;
  background-color: #ffffff;
  img {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 1rem;
    margin-top: 3.4rem;
    background-color: #ffffff;
    padding: 2rem;
    z-index: 1;
    border-radius: 12px;
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  }
`;

const ProjectInfo = styled.div`
  position: relative;
  padding-bottom: 1rem;
  margin-top: 1.5rem;

  h3 {
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    border-radius: 12px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    /* border-radius: 180px; */
    /* border-top-left-radius:12px;
border-bottom-left-radius:12px; */
    /* border: solid 5px #1d3b7a; */
    /* border-left: none; */
    margin-left: -3rem;

    margin-top: -4rem;
    padding: 1rem;
    padding-left: 2rem;
    font-size: 1.5rem;
    font-weight: 600;
    /* background-color: #f8e97d; */
    background-color: #fff;
  }
  .description {
    margin-left: 2rem;
    text-align: center;
    padding: 0rem;
    position: relative;
    /* text-transform:uppercase; */
    img {
      padding: 0rem;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: -3rem;
      margin-top: -6rem;
      border-radius: 360px;
    }
  }
  color: #1d3b7a;
`;

const BoxTechnologies = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 0rem;
  margin-right: -1rem;
  border-radius: 12px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #fff;
`;

const TechnologyItem = styled.p`
  font-size: 1.2rem;
  padding: 0 1rem;
  text-transform: uppercase;
  font-weight: 600;
  /* background-color: #f8e97d; */
  background-color: #fff;
  color: #1d3b7a;
  display: inline-block;
  border-radius: 360px;
  /* border: solid 5px #1d3b7a; */
`;
