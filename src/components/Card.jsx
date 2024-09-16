import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ImgMediaCard({ data }) {
  return (
    <Card sx={{ width: 500, height:450 }}>
      <CardMedia
        component="img"
        alt={data.name}
        height="250"
        image={`/images/${data.imageSrcName}.png`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={data.gitLink} target="_blank" rel="noopener noreferrer"><GitHubIcon/></Button>
        <Button size="small" href={data.viewLink} target="_blank" rel="noopener noreferrer" variant="contained">View</Button>
      </CardActions>
    </Card>
  );
}
