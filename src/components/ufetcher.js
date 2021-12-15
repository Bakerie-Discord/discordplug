import React from "react";
import axios from "axios";
import ParticleMenu from "./particle";
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
        <div align="center">
          {repos.map(repo =>
            <div key={repo.id}>{repo.name}</div>
          )}
          <ParticleMenu/>
        </div>
    );
}