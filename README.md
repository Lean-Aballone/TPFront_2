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
    ├── Clima
    │   └── clima.css
    ├── components
    │   ├── Footer.jsx
    │   ├── Ifts.jsx
    │   ├── Img.jsx
    │   ├── MovieCard.jsx
    │   ├── Navbar.jsx
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
    │   ├── Peliculas.jsx
    │   └── RenderDiagram.drawio.html
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


[Link al diagrama](https://viewer.diagrams.net/?tags=%7B%7D&lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&dark=auto#R%3Cmxfile%3E%3Cdiagram%20name%3D%22Page-1%22%20id%3D%221xXQZYzDkBPVSXY3quA3%22%3E7V1Zk5u4Fv41rrr3IV1IIJbHjhMnqcrSU5mq3HmkbdpmmrZ6MO4lv%2F4KG2yDWOQG6wgN%2FZAYWWD7bPrOoqOJOX14%2BRT7j6tvdBFEE2wsXibmhwnGyPAs9l868rofsTHaDyzjcJFNOg78DH8H%2BZ3Z6DZcBJvCxITSKAkfi4Nzul4H86Qw5scxfS5Ou6NR8VMf%2FWXADfyc%2BxE%2F%2BitcJKv9qIud4%2FjnIFyu8k9Gtrd%2F59af3y9jul1nnzfB5t3ub%2F%2F2g58%2FK%2Fuhm5W%2FoM8nQ%2BbHiTmNKU32rx5epkGU0jYn2%2F6%2BWc27h%2B8dB%2BtE5AaLJL9%2F%2FPPHX1%2B%2Bf3q3nf26%2FefHzfKdmX235DWnR7Bg5MkuaZys6JKu%2FejjcfT97jcH6VMNdnWc85XSRzaI2ODfQZK8Zrz2twllQ6vkIcreZV84fv1fev8VyS%2F%2Fyh63u%2FjwUrh6PVwtrlOOs8s1XQf7kVkYRdn7%2B9%2BS%2FoBaEmVDG7qN50EDXXJJ9ONlkDTMwwdGMgUJ6EPAvi%2B7Lw4iPwmfit%2FDzyR1eZh35BZ7kTHsDOblD37yo232UeyXLoJ4U8nVr%2F4t090CJ%2FwoXK7Z6zkjUBCzgacgTkKmHNfZGw%2FhYrFnerAJf%2Fu3u%2BeltH6k4TrZ%2FSDyfkI%2BHKifPiB4mVRobnbzUSFO%2BVIvnDxxs6e%2FM64MkitjZnz2%2FDiD%2FtnTb9JfczKF3t1tGN%2FLDDp8ibfzjGfZBNsRo8L7RfjEXi7Tl9ePj1d%2Fb17yd9gHnbzJ8faojylLn1dhEvx89Hfi%2FcxsdpHjtVzitKSW8KZtFIiOcoY%2Bn9jPbGh1Yjot40J6QEYjVm%2BcBIyY1dGI7W5lP8p%2FPZmQGQhex15yaShKEbZLy1dpPrIb57MX%2B2%2FQr7a6eltY0mphXWwOzcJ6MOZAObW2h6DWTvP8y6h1rh%2B6qvVeBWr12rhia7hdJLvqWo1FcNNX%2F5VukwFBJ2wAQ6fcCx%2BxUxUmEjCyNZp2WSNbxkKm1WxkrcbpF4JOtuY21qjm%2FNHGOggVyI5Ut7H599UWOYkqtdtRqbuZZDwkkwzAHWcIJvewjEu1uY7mNrcm3HqwucixS%2B6q8kbX4lj2M1wEt368h7HAgPUQ23stiTUUYDWBAGvzGrXwN6sDV9KLGz9h%2BpMqDFtLDLdfQ2kLGkpcE0C%2FrKW0my0fN9%2BEsJSmklBHUTECiQ%2BfK0YWiBgBYbVBilFNsFktMSIgYgSUhh%2BkGIGEtc8VI6%2FZXbiQGFkwYnSZYJ6i4gfifZ4rfsiCCPmZQIn4QcpR1xiTFDnCBoKQI2e0Y53kr6tY8ctZWW6Id%2BWd%2FhUfuJf%2B7BlHaQFedNvny8g9O0DlCdoIt4hxBcnKnW1cCQEwrnxa7sc2ibLYJmSo0S5BFvBQIx9M%2F%2B4%2FqRKY5XK6NjC1%2BEq5P%2BlyGQXvt0lC10rQDJXBTAXNkCGTaB5HtC93yQaWWKoIlKVkUKTH1SyvrGxdzsyuy1k3PmgVVYDgn1VTKiKJf2N5fFf9A%2FHVy3kxq7y%2Fqwwnzcb5l0GTluZVXlZzhbxxhV0XF8g%2BgIoDzatEWnj2jlkkM9%2B1OpjyZ5PjWUX982f2OZeqft4kMb0PpjSijOEfohQAvlv48f1%2FJszw7P4mmP02czZz2ev%2F9oPYTdW8HKI9KBWtwiMYEtQQGxjUOMqiGlEGdkalb0I15TKNNlRjQaAaovkKSWqyBMcVEiNEBrZC8oWUFSvk%2BzDx5zT2oVdJ15jNelsluWQv9CppA4UM5BlZIrpKgm4lsJVMyIPwATSEZgOhFfX4YIOUJJeL%2BtpAh2OQpvkXSgyPcbqOwuWAFCqfLVzN8y8kXJrH6Zz2mI9rFre8q9%2FJwtHcDWlnmmF5yodTHc17xLRwKY2mOsozKV9DWvpHBP4a2jM0mGc4m%2FXkGRLVPMM8WaIvEhatUXNBwm%2Flksc2sOISACTsah8%2BEBaSru5SN2Udg%2BxdGQjjkpyt5QaAS3KotNMVOLmtUXaD5B8yGJ8kx%2BOjbfZAq7q8EUjlagZS7H%2BuiUVG8w2XsbGe9gkAYSkB2bd5tpSYEJFnZPC5U61WYq8thGGXivjUX4ahofngkbk3CGSOMAYxCHy5oV4GoRmap9mCgZW%2FeFrtmQZBCCBV%2FmcbBERAfHWkuUGogYdHX91E5fyh8kkPZOB%2FNdd2qSmvwDTleYb5RH1FoupjHN6D1zCmeareahi9UqNJ8EzVoQBWX9%2FZEVwZkdG1q0jHhsiao9FM1BojxTgngrqmC6HRKe2saV3DVB1t3uhFdOYgbPP4%2FMSqkYNv5mDdyQ4XbjBf3sXR6gkSB8IThDpeSyMBM0AyVucLWLkjkxwBOxB8FLA3WzA8DAFzPIjgNsajgHUVMJDkyfkC5kLstUBY87r9TIOa8qmekcEEdd3VCi5VRNo%2B0fVv8EibYdj2dNpTpA2Vj%2BiED7Xp1fC3T4vsilrkzi1PO3JwdDu7ctCsUVtZHBz9us4cBAkccD3aWxvFIa%2FrDVIOs8vXm1Ei3y6RIGfunC%2BRuLmoQeAGORI5eo6dJRKkAcT5EmmBFOISzfcSZxrU4Dk6tlXcEqN8xQYaGyR3twog8aTzrYIJ0Y0OEc2bd2Qa1FT%2FYNvOwApyke5NBNu4Zlxh4rkFpg2gZNICcoMVNMqdjyjrFpAg0GBb3d3nwiyEydOcva4iD2QDOuGbwuhloet6NB8stGW7TtFCK7%2BuYt5F%2BubHob%2Bm3Y%2FNEc3HTKdGfz3OkVeq44HPx5Ax8lYjfJ6o5bVgS6aJp7tpq4m1H0wbsvMWCYMJJJCx8qmz2gFj1jEU1JWDBCZAXD6LszUUVD7tUw5kzaGBvna9NahgoGJQQX3Eyq%2FFFYVGN0EUzreRv7lUsVEPUBUTgRM0pUJVk%2FcGfgXRnObnIMnwBno98agu1Q53DCdIQKzHpccUXXpgsQPR3LJbNQVqJzvsTVwKFytv2k3etH9hxF%2FGPvu3h3N8QUwQLiMbcBPEq8aMUibjMgncY1dms7xxC5zA%2FCo69eOFJvJLMDB580xGMwC8To11BH5%2BY78nU5W720BLekWBTQUrvjwsodnQbxv4mmq5UzYQmWywx2LjGvkUBat212rxN4VJyjtCidEcJSF24%2FzLBEkc3txqhaTtViSNnHJaT%2Fngdw6JtK27ENdsPATNdprnX0izNW8E5LQltQzHNYem2GNSq6tB6LqtqBtiFopeX9%2FSbaIVZrbLNUwVmNmWipn5KMi37YbZLnlu%2BkUJDO6m24gjsNwoSL8%2BH1aNvDwsL%2BW8Bkdjx1CNxjxAqgpvrO%2BoXrZaIGItNb7h8AcqDDpiXUb74HE8l18Mv%2FtPcqnbW5TULe8qghZfV8iMKIH5%2BmWEQPJdKuZzhXrUXM%2BTkK4vVjgCwgqEBZJkjlReCKUOdpBcL04grJpWCLmkM%2F%2BJxuEhDa8LNwyBxULqUuzxS%2FHP%2BzCKpJY%2F9NmJXiBnKVXcPR5MVoj7lK4Tf67XeoxEquGkLgJZK3w44NlvKzhTtcRw1gC9QN%2FPQSxxb1fPvfYEooiSCSwEY5TA9j2zQgBQSrXryBDCMUogyn5ZoVxsHSF4ENMviYlAxEYyifnwepW006cQHrL3LO4C4Um5KGbfIHwgkLJfZjgC8F4yMzQLFiNXtWjxIYIBVoRgmd7ktAzhign1pK0UgV3dBHHIaJCWqijcDR6kFvENxw3kS5DcbvCaH66dKVdTPWKa7C9QXv2dPajiIMZ%2FFduMK9vMA60D4hrv3UoNz%2FTcGUa1xCCq2MssNzzTM4EF4otyCZxzHNAR7ZXEmDuvGtwRNXlH9GYVRnRDH1evQyWzIUBmTy6Z%2BSKC6TYO6SZMBktlkZ2bcp1Hk0eXf2yZ8zhYCpc7AcKbC75LYLrHm2G2ZLBGGQuk9OXKscXD7V0oUPY%2B5B7jIOyXqmaTKzZ6DzrUJLSzVXLvRH7ZGzaJuVNAL0didhkzWp36hIwIq290kfrWH%2F8P%3C%2Fdiagram%3E%3C%2Fmxfile%3E)

</details>

---

## Integrantes Grupo 14:

* Leandro Ezequiel Aballone
* Erika Johana Cruz Vallejo
* Mariano Fabian Gonzalez
* Gonzalo Villafañe
