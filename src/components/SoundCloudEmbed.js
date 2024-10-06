import React from 'react';
import { Box, Typography } from '@mui/material';
import line from '../media/line.mp4';



const SoundCloudEmbed = ({ embedUrl, trackUrl, trackTitle }) => {
  const artistUrl = "https://soundcloud.com/dney_bboi";
  const artistName = "AZIDO";
  return (
    <div
      className="soundcloud-embed"
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <iframe
        width="100%"
        height="350"
        allow="autoplay"
        loading="lazy"
        src={embedUrl}
        style={{
          border: 'none',
          borderRadius: '15px',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      ></iframe>
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily:
            'Interstate, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Garuda, Verdana, Tahoma, sans-serif',
          fontWeight: 100,
          marginTop: '10px',
        }}
      >
        <a
          href={artistUrl}
          title={artistName}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          {artistName}
        </a>{' '}
        ·{' '}
        <a
          href={trackUrl}
          title={trackTitle}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          {trackTitle}
        </a>
      </div>
    </div>
  );
};

const SoundEmbed = () => {
    const embeds = [
        {
          embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1885712715&color=%230e0a0a&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          trackUrl: "https://soundcloud.com/dney_bboi/baddadan-not-included-2024-azido-megamix",
          trackTitle: "Baddadan Not Included (2024 AZIDO MEGAMIX)",
        },
        {
          embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1829959767&color=%23181804&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          trackUrl: "https://soundcloud.com/dney_bboi/eiv37si0oml4",
          trackTitle: "AZIDO goes lower than 174 BPM",
        },
        {
          embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1645604652&color=%23181804&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          trackUrl: "https://soundcloud.com/dney_bboi/convict",
          trackTitle: "Convict",
        },
    
        {
          embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1804242420&color=%23181804&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          trackUrl: "https://soundcloud.com/dney_bboi/its-ruff",
          trackTitle: "It&#x27;s Ruff",
        },
      
        {
          embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1789081297&color=%23181804&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          trackUrl: "https://soundcloud.com/dney_bboi/azido-remix-1",
          trackTitle: "בניתי עלייך הארדקור",
        },
      ];


  return (
    <div style={{ height:{ xs:'150vh' , lg: '480vh' },
     overflow: 'hidden', position: 'relative' }}>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
    
      }
    `}</style>
    <video
      src={line}
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        minWidth: '100%',
        minHeight: '100%',
        width: 'auto',
  
        transform: 'translate(-50%, -50%)',
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
            <a href="https://soundcloud.com/dney_bboi" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '40px', color: '#fe02a2',  
      paddingTop: '100px',
              fontWeight: '900',
              fontFamily: "'Orbitron', serif",}}>
        Follow me on SoundCloud
      </Typography>
    </a>
        
      {embeds.map((embed, index) => (
        <SoundCloudEmbed
          key={index}
          embedUrl={embed.embedUrl}
          trackUrl={embed.trackUrl}
          trackTitle={embed.trackTitle}
        />
      ))}
    </div>
  );
};

export default SoundEmbed;