const port = Number(process.env.PORT);

if (!port) {
    throw new Error("missing PORT var in environment");
}

export { port };
