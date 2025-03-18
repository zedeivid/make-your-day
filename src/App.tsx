import React, { useState, useEffect } from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

interface Post {
  id: number;
  content: string;
  author?: string;
}

const posts: Post[] = [
  { id: 1, content: "Smaidi! Tu esi skaists/-a! 😊", author: "Pozitīvā komanda" },
  { id: 2, content: "Katrs rīts ir jauns sākums! ☀️", author: "Rīta stars" },
  { id: 3, content: "Tu esi stiprāks nekā domā! 💪", author: "Motivācijas guru" },
  { id: 4, content: "Šodien būs lieliska diena! 🌈", author: "Optimists" },
  { id: 5, content: "Dari mazas lietas ar lielu mīlestību! ❤️", author: "Sirsnīgais" },
  // Humoristiskie citāti
  { id: 6, content: "Ja dzīve dod citronu, paprasi arī sāli un tekilu! 🍋", author: "Dzīves baudītājs" },
  { id: 7, content: "Mans treniņš šodien? Jā, es pacēlu savu telefonu vismaz 100 reizes! 📱", author: "Sporta entuziasts" },
  { id: 8, content: "Kafija ir mans superspēks! ☕", author: "Rīta cilvēks" },
  { id: 9, content: "Šodien izlēmu būt produktīvs... Rīt! 😴", author: "Prokrastinators" },
  { id: 10, content: "Mana diēta sāksies pēc šī pēdējā cepuma... Un vēl viena... 🍪", author: "Saldumu mīļotājs" },
  { id: 11, content: "Mans suns domā, ka es esmu pasaules labākais cilvēks! 🐕", author: "Suņu draugs" },
  { id: 12, content: "Dzīves moto: Ēd kūku, jo tu to esi pelnījis! 🎂", author: "Dzīves gudrinieks" },
  { id: 13, content: "Miegs ir mans labākais draugs... Kad vien varam satikties! 😴", author: "Nakts pūce" },
  { id: 14, content: "Šodien esmu tik skaists/-a, ka spogulis man uzmeta aci! 👀", author: "Pašpārliecinātais" },
  { id: 15, content: "Mana istaba nav nekārtīga, tā ir mākslinieciski radoša! 🎨", author: "Radošā dvēsele" },
  // Garīgie citāti
  { id: 16, content: "Jēzus ir gaisma, kas izgaismo mūsu ceļu. ✨", author: "Ticības ceļinieks" },
  { id: 17, content: "Mīli savu tuvāko kā sevi pašu. ❤️", author: "Kristus māceklis" },
  { id: 18, content: "Ar Dievu viss ir iespējams! 🙏", author: "Ticības spēks" },
  { id: 19, content: "Jēzus mīlestība dziedina visas brūces. 💖", author: "Cerības nesējs" },
  { id: 20, content: "Esi gaisma pasaulei, kā Kristus ir gaisma mums. 🕊️", author: "Gaismas nesējs" },
  { id: 21, content: "Tavs spēks ir Dieva žēlastībā. 🌟", author: "Žēlastības bērns" },
  { id: 22, content: "Jēzus ir mūsu miers un cerība. 🕊️", author: "Miera vēstnesis" },
  { id: 23, content: "Ticība pārvar visus šķēršļus. ⛰️", author: "Ticības kalns" },
  { id: 24, content: "Kristus mīlestība ir bezgalīga. 💝", author: "Mīlestības liecinieks" },
  { id: 25, content: "Lūgšana ir saruna ar Dievu. 🙏", author: "Lūgšanu warriors" }
];

const App: React.FC = () => {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * posts.length);
    setCurrentPost(posts[randomIndex]);
  }, []);

  if (!currentPost) return null;

  return (
    <Container maxWidth="sm" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPost.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Card>
            <CardContent sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                {currentPost.content}
              </Typography>
              {currentPost.author && (
                <Typography variant="subtitle1" color="text.secondary">
                  - {currentPost.author}
                </Typography>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default App;