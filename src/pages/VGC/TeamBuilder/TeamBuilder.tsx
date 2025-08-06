import React, { JSX, useState } from "react";
import PageBuilder from "../../../components/Parents/PageBuilder/PageBuilder";
import { GalleryPokemon, GalleryTeamVGC } from "../../../components/Children/Gallery/Gallery";

function TeamBuilder(): JSX.Element {
  const [filters, setFilters] = useState({
    name: '',
    type: ''
  });

  const handleFilterChange = (newFilters: { name: string, type: string }) => {
    setFilters(newFilters);
  };

  let mainContent = (
    <main>
      <h1>VGC Team Builder</h1>
      <p>Welcome to the VGC Team Builder!</p>
      <p>Here you can create and manage your VGC teams.</p>
      <p>Stay tuned for more features!</p>
      <GalleryPokemon limit={1500} />
      <GalleryTeamVGC />
    </main>
  );

  return <PageBuilder main={mainContent} />;
}

export default TeamBuilder;