# Course: Computer Graphics (YI1449) [cg-yi1449]

## Chapter: Intro & Why Computer Graphics [cg-intro]

Q: Give a concise definition of “computer graphics”.
A: Computer graphics is the science and art of communicating visually via a computer display and its interaction devices.

---
Q: Why does computer graphics still matter now that Generative AI exists?
A: Because CG gives control over what is shown, can visualize “real” data, integrates into 3D environments, and is also used “just for fun”.

---
Q: Name 3 application areas of computer graphics shown in the intro.
A: Examples include plots/graphs (data visualization), CAD, virtual reality, art/entertainment, image processing, and graphical user interfaces.

---
Q: What are the two big parts in the course evaluation (theory vs practica) and roughly their weights?
A: Theory is the larger part (about 65%) and practica is about 35%.

---

## Chapter: History Timeline [cg-history]

Q: Name two early computer graphics milestones from the 1950s.
A: Early graphical displays using an oscilloscope; early videogame “Tennis for Two”; and early drawing program “Sketchpad”.

---
Q: When was the term “Computer Graphics” first used, and by whom (as shown in the slides)?
A: Around 1960, by William Fetter at Boeing.

---
Q: Give two notable developments from the 1960s listed in the slides.
A: Spacewar videogame; Bézier curves; early computer animation film; HMD (head-mounted display).

---
Q: What is SIGGRAPH and when does it appear in the timeline?
A: ACM SIGGRAPH is a major computer graphics conference; the slides mention 1969.

---
Q: Name two events/tech milestones listed for the 1990s–2000s era.
A: 1992 OpenGL; 1999 Nvidia GeForce 256; 2006 OpenGL taken over by Khronos Group; plus later: OpenGL ES, motion capture, GPGPU, physically based rendering, Vulkan/Metal.

---

## Chapter: Graphics Pipeline [cg-pipeline]

Q: What is the “graphics pipeline” in one sentence?
A: It’s the sequence of steps that converts scene/geometry data into pixels in the frame buffer shown on screen.

---
Q: In a classic pipeline view, what happens after primitive assembly?
A: Rasterization converts primitives into fragments/pixels, followed by per-fragment operations, ending in the frame buffer.

---
Q: What is “rasterization”?
A: The step that maps geometric primitives (triangles/lines) into screen-space fragments/pixels to be colored.

---

## Chapter: OpenGL Basics [cg-opengl]

Q: In OpenGL naming conventions, what does the prefix “gl” indicate?
A: It indicates core OpenGL functions (e.g., glBegin()).

---
Q: What are GLU and GLUT and what are their common prefixes?
A: GLU is the OpenGL Utility library (prefix glu); GLUT is the OpenGL Utility Toolkit (prefix glut).

---
Q: Give an example of an OpenGL symbolic constant and an OpenGL datatype mentioned in the intro.
A: Example constant: GL_COLOR_RGB. Example datatype: GLfloat.

---
Q: Which include is often sufficient because it already includes gl.h and glu.h (as stated in the slides)?
A: Including GLUT (glut.h) is often sufficient because it includes gl.h and glu.h.

---
Q: In the “Hello OpenGL” example, what does setting GL_PROJECTION and calling gluOrtho2D() do?
A: It sets up a 2D orthographic projection (a 2D coordinate system mapping to the window).

---
Q: In the simple line example, what do glBegin(GL_LINES) and glEnd() represent conceptually?
A: They define the start and end of a primitive specification block; vertices between them form line primitives.

---

## Chapter: HTML5 Canvas (2D) [cg-canvas]

Q: What is the HTML <canvas> tag used for?
A: It defines a bitmap drawing area in an HTML page that you can draw into using JavaScript.

---
Q: How do you get the 2D drawing context from a canvas element?
A: Get the element by id, then call getContext("2d"), e.g. const ctx = canvas.getContext("2d").

---
Q: What are some basic 2D canvas drawing methods shown?
A: fillRect(x,y,w,h), setting fillStyle, beginPath/moveTo/lineTo/stroke(), fillText(), strokeText().

---
Q: What does “context is case sensitive” mean in practice?
A: You must use the exact string like "2d" or "webgl" with correct casing, otherwise you won’t get the intended context.

---

## Chapter: WebGL Intro [cg-webgl]

Q: What is WebGL and what is it based on (as stated in the slides)?
A: WebGL is a browser graphics API integrated in HTML5 and based on OpenGL ES 2.0, using a shader-based pipeline.

---
Q: How do you get a WebGL rendering context from a canvas?
A: const gl = canvas.getContext("webgl").

---
Q: In the simplest WebGL “clear” demo, what do gl.clearColor(...) and gl.clear(gl.COLOR_BUFFER_BIT) do?
A: They set the clear color and then clear the color buffer to that color.

---

## Chapter: Shaders & GLSL [cg-shaders]

Q: Why do you need shaders for “real graphics” in WebGL (as introduced)?
A: Because WebGL uses a shader-based pipeline; you need at least a vertex shader and fragment shader to render.

---
Q: What does a vertex shader do vs a fragment shader?
A: Vertex shader determines what happens to vertices (positions, transforms, per-vertex outputs). Fragment shader determines pixel (fragment) colors.

---
Q: What language are WebGL shaders written in?
A: GLSL (GL Shader Language).

---
Q: In the shown minimal vertex shader, what are gl_Position and gl_PointSize used for?
A: gl_Position sets the clip-space position of the vertex; gl_PointSize sets the size of points when drawing points.

---
Q: In the shown minimal fragment shader, what does gl_FragColor represent?
A: The final RGBA color output for the fragment/pixel.

---
Q: List the core steps to use shaders in WebGL as shown in the pipeline demo code.
A: Create program → create vertex/fragment shaders → set shader sources → compile shaders → attach to program → link program → use program → draw.

---
Q: What is the difference between attribute variables and uniform variables?
A: Attributes provide per-vertex inputs (can differ per vertex). Uniforms are global inputs constant for all vertices/fragments in a draw call.

---
Q: How do you typically set a constant attribute value for a shader attribute (as shown)?
A: Get the attribute location with getAttribLocation, then set it with something like vertexAttrib3f(location, x, y, z).
