import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello Patryk</h1>
      <nav>
        <a href="#page1">page1</a>
        <a href="#page2">page2</a>
      </nav>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <form id="formularz">
        <input id="aktywnyKrok1" type="checkbox" name="aktywnyKrok" value="1" />
        <fieldset>
          <legend>Krok 1</legend>
          <label for="aktywnyKrok2">Następny</label>
        </fieldset>
        <input id="aktywnyKrok2" type="checkbox" name="aktywnyKrok" value="2" />
        <fieldset>
          <legend>Krok 2</legend>
          <label for="aktywnyKrok3">Następny</label>
        </fieldset>
        <input id="aktywnyKrok3" type="checkbox" name="aktywnyKrok" value="3" />
        <fieldset>
          <legend>Krok 3</legend>
          <label>Następny</label>
        </fieldset>
      </form>
      <section id="page1">
        <h2>page1</h2>
        <a href="#">zamknij</a>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </section>
      <section id="page2">
        <h2>page2</h2>
        <a href="#">zamknij</a>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </section>
    </div>
  );
}
