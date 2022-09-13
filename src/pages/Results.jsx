import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../Rick.css";

export const Results = () => {
  const [resultCharacter, setResultCharacter] = useState([]);
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  useEffect(() => {
    const enPoint = `https://rickandmortyapi.com/api/character/?name=${keyword}`;
    axios
      .get(enPoint)
      .then((res) => {
        const characterArray = res.data.results;

        if (characterArray.length === 0) {
          Swal.fire({
            title: "No se encontro lo que buscabas!",
          });
        }
        setResultCharacter(characterArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [keyword]);

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        justifyContent="center"
        color="text.primary"
        gutterBottom
      >
        Results : <em>{keyword}</em>
      </Typography>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        justifyContent="center"
        color="text.primary"
        gutterBottom
      >
        {resultCharacter.length === 0 && " No hay Resultados"}
      </Typography>

      <main>
        <Container sx={{ py: 2 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {resultCharacter.map((character) => (
              <Grid item key={character.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      16: 9,
                      //   pt: "56.25%",
                    }}
                    image={character.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }} align="center">
                    <Typography gutterBottom variant="h5" component="h2">
                      {character.name}
                    </Typography>
                    <div className="estado">
                      <h4>{character.status}</h4>
                      <span className={character.status}></span>
                    </div>
                  </CardContent>
                  <CardActions>
                    <Button
                      component={RouterLink}
                      to={`/details?characterID=${character.id}`}
                      size="small"
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};
