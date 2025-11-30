import "./globals.css";
import Scene from "../components/Scene";
import AudioSequencer from "../components/AudioSequencer";

export default function Page() {
  const scenes = [
    {
      title: "Park Opens",
      cue: "Bright, cheerful tune as kids play in the park.",
      render: () => (
        <>
          <div className="park" role="img" aria-label="Sunny park with kids and a kite">
            <div className="sun" />
            <div className="kite" />
            <div className="kid" />
            <div className="kid" />
            <div className="kid" />
            <div className="grass" />
          </div>
          <p>?? Happy park beat</p>
          <p>
            Kids are running, skipping rope, flying kites. Birds chirp. A gentle beat begins.
          </p>
          <p>
            ?? <strong>Narrator (singing):</strong> When we step outside to play, we learn new things each happy day,
            and one thing we must not forget, is showing elders our respect!
          </p>
          <p>
            ?? <strong>Narrator:</strong> Listen close and sing along, clap your hands and join our song. Every scene will show the way to make elders? hearts feel bright and gay!
          </p>
          <p>
            ?? <strong>Chorus</strong>
            <br />
            ?? <strong>Kids (singing):</strong> R-E-S-P-E-C-T, clap your hands and sing with me! ??
            <br />
            <strong>Kids:</strong> Use kind words and helping hands, that?s how kindness always stands! ??
            <br />
            <strong>Kids:</strong> Respect is love that we can show, to every elder that we know!
          </p>
        </>
      )
    },
    {
      title: "Grandma Meena Drops Her Bag",
      cue: "The rhythm gets a little bouncy as Ria notices Grandma.",
      render: () => (
        <>
          <p>?? Gentle surprise</p>
          <p>
            Grandma Meena walks by with a grocery bag. It slips and falls. Apples roll on the ground.
            Ria stops mid-run and turns toward Grandma.
          </p>
          <p>
            ?? <strong>Narrator:</strong> Oh no! The bag falls with a thump, apples make a little bump-bump-bump!
          </p>
          <p>
            ??<span className="apple">??</span><span className="apple">??</span> roll across the path.
          </p>
          <p>
            <em>Ria jogs over, kneels, and gathers the apples with careful hands.</em>
          </p>
          <p>
            <strong>Ria:</strong> Here you go, Grandma Meena! I?ll help carry your bag to the bench.
          </p>
          <p>
            <strong>Grandma Meena:</strong> Thank you, dear. Your kindness makes my day shine bright!
          </p>
        </>
      )
    }
  ];

  return (
    <main className="container">
      <header className="header">
        <div className="brand">? Respect Song</div>
        <AudioSequencer />
      </header>

      {scenes.map((s, i) => (
        <Scene key={i} index={i} title={s.title} cue={s.cue}>
          {s.render()}
        </Scene>
      ))}

      <footer className="footer">
        <div className="progressWrap container" style={{ padding: 0 }}>
          <div className="progress" role="progressbar" aria-label="Story progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={100}>
            <div className="progressInner" style={{ ['--progress']:'100%' }} />
          </div>
        </div>
      </footer>
    </main>
  );
}
