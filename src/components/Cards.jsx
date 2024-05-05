import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Alert, Button, CardActionArea, CardActions } from '@mui/material';


const Cards = () => {
  return (
    <div style={{marginLeft:"40px"}}>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="140"
            image="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/moong-dal-dosa-recipe.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Dosa
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:10
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            order now
          </Button>
        </CardActions>
      </Card>
      
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="140"
            image="https://static.toiimg.com/photo/imgsize-2271536,msid-78596343/78596343.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Idili
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:10
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Order now
          </Button>  
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="140"
            image="https://th.bing.com/th/id/OIP.I9QucLrwUoCwIYBRW1xsKAAAAA?rs=1&pid=ImgDetMain"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Chapti
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:10
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Order now
          </Button>  
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="140"
            image="https://tasteblends.ca/wp-content/uploads/2021/09/Porotta.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Parotta
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:10
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Order now
          </Button>  
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea><br></br><br></br>
          <CardMedia
            component="img"
            height="140"
            image="https://tasteblends.ca/wp-content/uploads/2021/09/Porotta.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Masaladosa
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Price:10
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Order now
          </Button>  
        </CardActions>
      </Card>
      
    </div>
  );
};

export default Cards;