# Trabajo Práctico Grupal 2
### Desarrollo de sistemas web (front End)
### Instituto de Formación Técnica Superior N° 29
---

### Estructura del proyecto: 
<details>
  <summary>Click para expandir/colapsar estructura</summary>
  
    src/
    ├── App.css
    ├── App.jsx
    ├── assets
    │   └── img
    │       ├── carlina.png
    │       ├── chikis.jpg
    │       ├── cropped-Designer.jpeg
    │       ├── gonzalo-profile.jpg
    │       ├── kity.jpeg
    │       ├── lean_bg.jpg
    │       ├── logo_ba__buenos_aires_ciudad.png
    │       ├── pexels-bibekghosh-14553705.jpg
    │       ├── pexels-markusspiske-2764993.jpg
    │       └── test.jpg
    ├── Bitacora
    │   ├── Article.jsx
    │   ├── bitacora.css
    │   └── reuniones.json
    ├── components
    │   ├── ClimaPreview.jsx
    │   ├── Footer.jsx
    │   ├── Ifts.jsx
    │   ├── Img.jsx
    │   ├── MovieCard.jsx
    │   ├── Navbar.jsx
    │   ├── NoticiasPreview.jsx
    │   ├── Sidebar.jsx
    │   └── ToggleButton.jsx
    ├── erika
    │   ├── About.jsx
    │   ├── Actions.jsx
    │   ├── Contact.jsx
    │   ├── data.js
    │   ├── erika.css
    │   ├── Favorites.jsx
    │   ├── Music.jsx
    │   ├── Nav.jsx
    │   └── Skills.jsx
    ├── gonza
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── data.js
    │   ├── gonza.css
    │   ├── Hero.jsx
    │   ├── Movies.jsx
    │   ├── Music.jsx
    │   ├── Nav.jsx
    │   └── Skills.jsx
    ├── index.css
    ├── lean
    │   ├── About.jsx
    │   ├── Card.jsx
    │   ├── habilidades.json
    │   ├── Info.jsx
    │   ├── lean.css
    │   ├── Musica.jsx
    │   ├── Peliculas.jsx
    │   └── resources
    │       └── songs
    │           ├── coldplay.webm
    │           ├── ghost.webm
    │           └── linkinpark.webm
    ├── main.jsx
    ├── mariano
    │   ├── Curiosity.jsx
    │   ├── data.js
    │   ├── Hero.jsx
    │   ├── Interests.jsx
    │   ├── mariano.css
    │   ├── Nav.jsx
    │   ├── Philosophy.jsx
    │   ├── Quote.jsx
    │   └── Skills.jsx
    ├── pages
    │   ├── apiSections.css
    │   ├── Bitacora.jsx
    │   ├── Clima.jsx
    │   ├── Diagrama.jsx
    │   ├── Diagram.drawio.svg
    │   ├── Erika.jsx
    │   ├── Gonza.jsx
    │   ├── Home.jsx
    │   ├── Layout.jsx
    │   ├── Lean.jsx
    │   ├── Mariano.jsx
    │   ├── Noticias.jsx
    │   ├── Peliculas.jsx
    │   ├── RenderDiagram.drawio.html
    ├── portada
    │   ├── Card.jsx
    │   ├── Integrantes.jsx
    │   ├── portada.css
    │   └── Welcome.jsx
    └── seccionPeliculas
        ├── data.json
        └── peliculas.css
    
</details>

---

### Flujo de componentes: 

<details>

<summary>Click para expandir/colapsar flujo</summary>

![Flujo de componentes](./src/pages/Diagram.drawio.svg)


[Link al diagrama](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%221xXQZYzDkBPVSXY3quA3%22%3E7V1bc9q6Fv41zJzzkIwl3x8TWtrOThr25Mz09GmPAw54xyC2MTTpr98yWA62HCMHWRfiTKcDRuay1tKnb120NDCHi%2BcvSbCa36JpGA%2BgMX0emJ8GEAILwkH2z5i%2B7K94hru%2FMEuiaT7o9cJ99DvMLxr51U00DdelgSlCcRqtyhcnaLkMJ2npWpAk6Fd52COKy5%2B6CmYhdeF%2BEsT01R%2FRNJ3nvwK6r9e%2FhtFsTj4ZOP7%2BlYdg8jRL0GaZf94Amo%2B7v%2F3Li4C8V%2F5D1%2FNgin4dXDI%2FD8xhglC6f7R4HoZxJlsitv19ozdeLb53Ei5TlhssO%2F1998%2BfP799%2F3KxGf14%2BOduPLsw8%2B%2BWvhB5hFMsnvwpStI5mqFlEH9%2BvXq9%2B81h9q4GfvY65gahFb4I8MW%2FwzR9yXUdbFKEL83TRZy%2Fir9w8vL%2F7P5Lmzz9mb%2Fd7smn59Kzl%2BLZ9CrTOH66RMtwf2UUxXH%2BOi2RXEhrtEkmYYMYiOEFySxMG8bltp7J6OADcnl%2FCdEixN8XD0jCOEijbdnEgtxSZ8W4V23hB7nCWiiPvPE2iDf5R%2BGfPg2Tda1Wb4IHPHdLmgjiaLbEjydYYmGCL2zDJI3w5LjKX1hE0%2Ble6eE6%2Bh087N4vk%2FUKRct094Ps64H9qVb6TRaXfVD4PKiZ4fmHlGZJSbj5XRfGpWGTyZiDD1EQs%2Fzzdx9nv%2BZgCHp8XGNDqCqo%2BBLv1xmtsgF0Yiyw62m0xQ9n2cOr1ery7%2FUzeQV%2F0MGLlG5f52Om0l%2FzKA3vV8HO3n9hzC5r%2FM05QinkTcGbjlESOiAI9%2BsAP%2FNL8wPotIyO5oHdg9gBOB0FMYs3iO1uxT8qeDkYkAMEPceeiTWUrQg6leWrMh44jePxg%2F034DtbPQ0R1uaJsB40dUNYXw4cyJ7WjpbT2m0e3820JguWVtOa2PXp89q4xGu4Uxa76rMasvCmm%2BAFbVKNqBM0JFMn4oV%2FdO5kMYKsrwTIVrmQaTWDrNU4vCPq5OiIsWRh4IGxLgAlsQPVMZZ833NhTqyT2uM9qU%2BDZKgTJHevHVdLyC2WcaGY6%2BqIuYTaccBc4DoVd1V50LUold1H0%2FAhSPY0VjJhLWJ7LxWzlkVYTUmEtXmNmgbreaGV7Mk4SPH8ySYMXlwM7ySgdBiBkkRqJCOl04x81HhTBlKaSlIdNcxIjfhwWzOypJiRJK6mgxnZWpqRLcWMJKXhdTAjNcLabc3Ib3YXOjIjS44ZdRPMU8P81PA%2B25ofsGSE%2FExJiXgd7Ih7jEmIHUEDyLAjt8exdvbH2azo5axqN7Z%2F6R%2F%2Bld9wPx3y93i1FsmL7vHxInLPrqTyBH2N%2Bzi4qpGVaw2utt0tuN7%2BvPEWcBvczVbjJfhj%2FJcbb4lQxZofg5mwpYEqKuZmV7Wi0sOKHF%2BCFX3MFVqo9UEtrM%2BDEggiXVpwt0njPD8jM13iVNwu6ekSOiH4Pdiqklyi6lIcydKiq33%2Fh2azOLzepClaKiEzUHXIamQGDJFC8ymhfXtM13KFpYpBWUoGdt%2B%2FdpEU41FKbnKn5Kfp4awiowL0R2aEKvrrt%2Fi0nH9qxBuruX2ruke1SifNxvHdsElLx0pVi9suH%2BMSeh4siV2DqikdK9346ewCI5LpWyWlQdV1RsCreQ%2FHV%2Fw5Xe3gWKcJegqHKEZY4Z%2FijABeTIPk6T8DDDy7vwHEv80cjTz8%2BL98GLupmpdjnxspZa0ktqFSpMaWEoo9IDWuKqyGVYH8Wem7WE211OwYq7FksBpbxxWSTAkuKyQEwNZshaSLwWtWyOsoDSYoCWSvkp4xGnFbJamCFdmrpCMpZNAZyNqsq6Ra26EcJYuKROhBrRCaI4mtSNeDo8a2imph8jHS4Rp20%2FiOilv6OF0743LV2GzR2riax3dkXDrG6VyuMR%2FPLLftUL8bj6ujG8JVaYblKx9OdXXsc8VPS1k01VVeSWRROdIDJwyWsj1DA3uGoxEnz9BWzTMkyZKzYcKsdbaeGuG3atn2MbLi2RKYsHdu4QNmI%2BHuLp02Wfsge0sFKuKStJ7lhgSXpKi004o4eTyj7IZN7tXGJyF8%2FMNhs899AT%2BtcvTDEik1Niy1hVhgNN%2FQDcb655YAYLYSNfaet7YSU0bkGRh07lT9ldjnGMJwKkV86i%2FDsqm5bszc15OZAwilAAJdbqgBIHCj5lm2QLPyF%2F%2BsdpWKYAhqVPm3BgRgS%2FHVSehZK0Ag%2BTMevroJqvlD5ZMewIAfWmu71JRfUpryOoN0or4mUfU5iZ6k1zBmeSpuNYx%2BdS%2B87ExVUQB7Nr6zy7gyAoN7Z6QTm7rryEYL%2B%2BETKYZECOpCFwC9U9p2pnEPU52Ieb0X0VaDalV8A3LqXq9BVg0C7omddzmCVNvRo56g7crwBGUdEaivgRlqZKzaG1i1I5MYAys00BsYK4JBTQ3M9WUEtyHsDaylgamRPGlvYJ6MvRYA6li3X0wLLvlUnyx66rqrNVqqibR9Qcvf0iNthuE4wyGnSBuoHjMsP9R2Xk3LT0BkjxWR%2BbdtPlGDvdvZUoPkFC1lNNj7dW01qEbggDpn4mijOOCfeoOQAznJetNbJLNFqnFuWHuLhM1FDQw3iLHI3nNsa5FqNIBob5GWlEJcW8e9xMW04OE5uo5V3hKjfMUG6Bskt0YFNeJJ7VHBlNGNDtg6Nu8opgWX%2BgfHcTUryAVaNhHkqDXjEtq%2BV1KaBiWTliQ3WD4o8z9m8bSABOk42%2B8%2BZ1ahInma1usq8KVsQLfppjAaIDSZFzwQ2nLIRkltNqBD2kW6DZIoWKLTj81hzccMhwa%2FHufAr9TxyM%2FH2H3kbW9rPivyWoqVTJMGqJpBG%2BkIwgHagENaJGgTSLD7yqe20041ztqHglpq0FYkQFw9T%2FhoKKh62qcYykqogWa4zjOoYIByUEF9xkqvxTWFRuMwjiabOFh3VWzEgapCm%2BEETaFU1aS9gR9hPEHkHCQR3gDXE4%2FeSrXLO4ZTSkDs%2FUuPybr0KMYdbB2RnRgHnx32JqyEi5WHdpOG9m9Y%2BLMkwP9zOMdXCgTBKrORDkH01BghhG1cpIA5dmU2qxu3pAuYXkWHQTI9E%2Fu1oWTxFhHbRgJ4lYF1LP38Rr4nU1W728i29JoCmxpVfFvMZKuBbxv4N6rlDtVgi1SD0xcb782Rlaw63KvF3xUmqe4ItY3mKIntNI7vJkji0nCrPpN2eDJp4FbTesoHvwklOpe6C%2FaZDbWc2W7z%2BI5mto6NgIhl8wh%2BGi45IkKfid0ntVoCAvdtRacxZqbo9dUD2qRnxZmdag1TDWd2hHJmOgpyu1lj7BLnpncqYOluOuHY0qIgfH0%2BqJp4aVpeyXlpJ2PXUE3GNEGqC28sH9F5YTVDxFpofIOcA3UuEesq25cex%2FPoxfB7sBUrXW5RUq%2B6q0i2%2BXpMMKIE5%2BOrCIbku1DO5zH1qLmapBFadlY4IkUVADIkyVyhumBKHewo%2BXlpAkDVZgWTSzoKtiiJijT8uWjDYFgshC7FPr0U3z9FcSy0%2FIFnJ3qGnKVQc%2FdpMllj7kO0TIPJea3HgKUaTugiUPTGl0U8%2BbaCM1VLDBcd0Q%2Fk%2BzVMBO7t4txrjyGKKFjATDRGCW7PWRUMhFIorheNoTVglHxVoVxsvWgCL5HE8BWxzRCxESxiOrxeZ%2B1oG8mn7JzNnSE8KZbFkI7hWlBKvspwGei9YGWcWbAYeKpFi4sIhrQiBMv0B4dlCJfYqAfHShHws3GYRFgGWamKOt3g1ahFfMdxA%2BSbi%2B0Gr%2BPh2sWM4VKPmCX7S5JXf2cPqDmI8UOpzbh0TBJo1UhrtHcrNDzDuTOMaonBou%2B8tPAMZwEzxBfFCphoXKIjylXEkDqvWrojatKO6HgexWiNVvMXXcVsMIjZFytmuohguEkitI5SbaXMsnNTrPNo0uzyzw12HrWVcLUToHy4oLsEZnu8MWdLtQVlyJDSF2vHFk23d6FA0fuQOcZB8C9VDZNrNnprHWpi2tkquHcivezpLWLqFFCBIr79eeMt4Da4m63GS%2FDH%2BC833l7Q9G0YRwsO2yDeEE2NABukVTFIkR2SaqUluyNdF12UK5HHowHPWsHkwQzWFnWiw5vQq67RxzrSuW1PM6Bu4HyITq3YFTzhhDlYVja0t6dbUyyUnCujRBCtaWI05wa%2FIyzzqOtudadhsesphsW2ZCx2YBmMM2PsLAnFBaSBMJB%2BQ7H4aYLp2%2BEMw7Y6v0XTDJc%2B%2Fws%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

</details>

---

## Integrantes Grupo 14:

* Leandro Ezequiel Aballone
* Erika Johana Cruz Vallejo
* Mariano Fabian Gonzalez
* Gonzalo Villafañe
