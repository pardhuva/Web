/**Static assets = files that don’t change at runtime, like:

Images (.png, .jpg, .svg, etc.)
Fonts (.woff, .ttf, etc.)
CSS files
Videos
PDFs

When you import static assets (like images, fonts, CSS) in React, the bundler (Vite, Webpack, CRA) can:

✅ Optimize them (compress, resize, minify)
✅ Auto-generate unique hashed filenames (for cache busting)
✅ Include them into your dependency graph
✅ Help with automatic path resolution
✅ Fail-fast if file missing (build-time error)
✅ Bundle everything into production-ready package

//without using import  
<img src="/images/cat.png" alt="Cat" />

//after using import 

import cat from '../images/cat.png';
<img src={cat} alt="Cat" />

**/

/**
 * before we were like in challenge8.jsx <Contact img = "./images/cat1.png" >  
 * instead of that we will import that image 
 * import cat1 from "./images/cat1.png"  
 * then <Contact img = {cat1}
 */