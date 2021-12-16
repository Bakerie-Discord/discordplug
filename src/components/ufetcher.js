import React from "react";
import axios from "axios";
import ParticleMenu from "./particle";
import { ListGroup } from "react-bootstrap";
export default function UFetchID({user}) {
    const [repos, setRepos] = React.useState([]);

    React.useEffect(() => {
      const fetchData = async () => {
          const response = await axios.get(`https://api.github.com/users/${user}/repos`);
          setRepos(response.data);
      }
  
      fetchData();
    }, []);
    return (
        <div className="text-light justify-content-center" align="center">
          <ListGroup className="w-50">
            {repos.map(repo =>
              <ListGroup.Item className="overflow-auto" variant="black" key={repo.id}>{repo.name}</ListGroup.Item>
            )}
          </ListGroup>
          <ParticleMenu/>
        </div>
    );
}