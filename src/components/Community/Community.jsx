import React from "react";
import "./Community.css";
import img7 from "../../img/img7.jpeg";
import img8 from "../../img/img8.jpeg";
import img9 from "../../img/img9.jpeg";
import img10 from "../../img/img10.jpeg";
import img11 from "../../img/img11.jpeg";
import img12 from "../../img/img12.jpeg";

const Community = () => {
  return (
    <div className="Community">
      <img className="Community__img" src={img7} alt="img" />
      <h1>
        <strong>
          ДОБРО ПОЖАЛОВАТЬ В<br /> XBOX
        </strong>
      </h1>
      <p>
        В Xbox мы верим, что игры должны быть доступны для
        <br />
        всех. <br />
        Мы стремимся сделать жизнь миллиардов людей по всему
        <br /> миру более увлекательной, создавая игровые
        <br /> возможности, которые будут доступны для каждого.Ведь <br /> когда
        каждый может играть, от этого выигрываем мы все.
      </p>
      <h2>
        <strong>
          В Xbox мы верим, что игры должны быть доступны для
          <br /> всех
        </strong>
      </h2>
      <div className="Community__container">
        <img src={img8} alt="img" />
        <div>
          <h3>Инклюзивность для всех</h3>
          <p>
            Разнообразие – наша сила. Мы стремимся быть инклюзивными,
            приветствуя в <br />
            нашем сообществе всех людей, оставаясь открытыми для новых идей и{" "}
            <br />
            отмечая уникальность наших последователей.
          </p>
        </div>
      </div>
      <div className="Community__container">
        <div>
          <h3>Доступен для всех</h3>
          <p>
            Ничто не должно вставать между вами и играми, которые вы любите. Мы
            <br />
            стремимся устранить существующие барьеры и предоставить игрокам
            <br />
            возможность адаптировать управление под их собственный уникальный
            стиль игры.
          </p>
        </div>
        <img src={img9} alt="img" />
      </div>
      <div className="Community__container">
        <img src={img10} alt="img" />
        <div>
          <h3>Доступен для всех</h3>
          <p>
            Ничто не должно вставать между вами и играми, которые вы любите. Мы
            <br />
            стремимся устранить существующие барьеры и предоставить игрокам
            <br />
            возможность адаптировать управление под их собственный уникальный
            стиль игры.
          </p>
        </div>
      </div>
      <h2>Как вы можете внести свой вклад</h2>
      <div className="Community__item">
        <div>
          <img className="Community__img2" src={img11} alt="img" />
          <h3> Обеспечьте безопасность и веселье в нашем сообществе</h3>
          <p>
            Игры должны дарить радость. Помогите нам сохранить эту атмосферу,
            следуя <br />
            стандартам нашего сообщества, общаясь с окружающими с уважением и
            добротой
          </p>
        </div>
        <div>
          <img className="Community__img2" src={img12} alt="img" />
          <h3> Стать послом Xbox</h3>
          <p>
            Задачей послов Xbox является приветствовать и объединять других
            игроков, делясь <br />
            своим опытом об Xbox и помогать выстраивать позитивное игровое
            сообщество <br />
            для всех.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Community;