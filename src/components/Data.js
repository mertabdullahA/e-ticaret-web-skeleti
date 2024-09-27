// data.js
const products = [
    {
        id: 1,
        name: "Tommy Hilfiger",
        description: "Basket Low Cupsole Sneakers White ",
        imageUrl: "https://s3-alpha-sig.figma.com/img/75b9/c712/a4c9e074c3b2fa9a02b4bed5bcb8abce?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxPhrG5TFOZwA7t8HqOOJHxzmJhm61v5y2OW7Qupl8x5BSid2xqfEXqrHXk6zHe8ypC-cj8AIX7Ek3-qc~TX0j-eFrZ503ONAl-t1xvLuAzlmCOFj9E9LEql148foeQddPAPt1GPz8DSxdF~kZ~ZKp6IEVrUbccCxMqhm6fvbNFa8iBpn6ei2BVCURCjF8ZydEwXbxKtRUzmvg5jtX0bvgjLjzngFsHV4rRlz82tE9Wp77G1hffcwOZW5ArrupdoLjiC12G3Po4ju~tGfGTC010RDgTF0kOCtxqrfzxfvxKv9tWMEEn6KeUX37vaxHNkZFv7ae2E06d5LL-vlahf2g__",
        price: 100
    },
    {
        id: 2,
        name: "Tommy Hilfiger",
        category: 'Laptop',

        description: "Basket Low Cupsole Sneakers White",
        imageUrl: "https://s3-alpha-sig.figma.com/img/75b9/c712/a4c9e074c3b2fa9a02b4bed5bcb8abce?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pxPhrG5TFOZwA7t8HqOOJHxzmJhm61v5y2OW7Qupl8x5BSid2xqfEXqrHXk6zHe8ypC-cj8AIX7Ek3-qc~TX0j-eFrZ503ONAl-t1xvLuAzlmCOFj9E9LEql148foeQddPAPt1GPz8DSxdF~kZ~ZKp6IEVrUbccCxMqhm6fvbNFa8iBpn6ei2BVCURCjF8ZydEwXbxKtRUzmvg5jtX0bvgjLjzngFsHV4rRlz82tE9Wp77G1hffcwOZW5ArrupdoLjiC12G3Po4ju~tGfGTC010RDgTF0kOCtxqrfzxfvxKv9tWMEEn6KeUX37vaxHNkZFv7ae2E06d5LL-vlahf2g__",
        price: 200
    },
    {
        id: 3,
        name: "Tommy Hilfiger",
        category: 'Çanta',

        description: "Basket Low Cupsole Sneakers White",
        imageUrl: "https://s3-alpha-sig.figma.com/img/b969/c961/7443cf00eec43f6e4648418681d2752b?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QNE5FLlsXdy-82kyADEpjsvi8i7dCJ5Ji02v0bhDXmw03NBfssbROgHX1a8VM1vwS7nZd48a4uyhT76pLO8tin9H29GJGZl5NfyUGeneMUefgHux~axoqEUy4AJN2-L2-EC86WNBlLGQqd7TPi-8HvPHONLRaOo4smG7Cndl6nBtlIENnap2Eex6TcMyyllrOtIkmeJuSYa9BxM8kU~vHi~gnlCUuvF7RgtiqTtQA3H4oXx7D-NuR8ilLs-DJ1lS0Em6KPZ6ZZXLaNOelkkG3UttqXEIuemiA-O8-ByhP5RY3ouJ-9iYdeqh5IR7Nm70RHKXV7VB8x9SDVidGqgSGg__",
        price: "100"
    },
    {
        id: 4,
        name: "Tommy Hilfiger",
        category: 'Çanta',

        description: "Basket Low Cupsole Sneakers White",
        imageUrl: "https://s3-alpha-sig.figma.com/img/d7b8/3693/4f103884c5ab0dde0a9224d1f09452c8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDjIBW4wok3r0c8HQWy5-CTNfqlkGArGd37qFsfyAIj0U-T1Dpic~zd2GbMF3aHRdBd2vRPLj55QPAJHGG~alSJ4PpCZ~BPmp4Byz-~Eby6e~jGiqVDfRCIJAQBHR~Esf3o6otKjfj5IzsMJQzd478hdf7LHapmMMikboiq-tZp8lWsmoXgQc~tiYoEvsIJMRwpd35z2h9LMnWGIxCj12gwk41E6kGM1sy~ZWWmN-zVk2M-BO9RsN3z1PoMFaihHytSaEcGS7FOlHwhd07uH4y5yMH43UhfNeKi4lWt-y0m4StF4CoU6xIu2615CyfzwSd24yaX3bVljCQuBXzXSIg__",
        price: "100"
    },
    {
        id: 5,
        name: "Tommy Hilfiger",
        category: 'Spor',

        description: "Basket Low Cupsole Sneakers White",
        imageUrl: "https://s3-alpha-sig.figma.com/img/d7b8/3693/4f103884c5ab0dde0a9224d1f09452c8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDjIBW4wok3r0c8HQWy5-CTNfqlkGArGd37qFsfyAIj0U-T1Dpic~zd2GbMF3aHRdBd2vRPLj55QPAJHGG~alSJ4PpCZ~BPmp4Byz-~Eby6e~jGiqVDfRCIJAQBHR~Esf3o6otKjfj5IzsMJQzd478hdf7LHapmMMikboiq-tZp8lWsmoXgQc~tiYoEvsIJMRwpd35z2h9LMnWGIxCj12gwk41E6kGM1sy~ZWWmN-zVk2M-BO9RsN3z1PoMFaihHytSaEcGS7FOlHwhd07uH4y5yMH43UhfNeKi4lWt-y0m4StF4CoU6xIu2615CyfzwSd24yaX3bVljCQuBXzXSIg__",
        price: 300
    },
];

export default products;
