console.log('Start');

let imageHTML = document.querySelector('#image');
let image;
const manualFileNames = ['F-1BycJWQAAHGbh.jpg', 'F0I8GimWwAA-CbV.jpg', 'F0sZZZmXoAAvaNM.jpg', 'F1LA8DyWcAExYam.jpg', 'F2nrBjnXoAkk9CG.jpg', 'F3bTgMuXIAExemQ.jpg', 'F3GmfClXoAUAGHV.jpg', 'F3ROOsRWkAAn4Be.jpg', 'F3WWWIPWAAAMetI.jpg', 'F86clJWW0AAgBoI.jpg', 'F93Z3O0XkAAg6va.jpg', 'F94FdNrWYAAR6dq.jpg', 'F9EB6A6XsAA4LiH.jpg', 'F9nS4BqWoAA9-YQ.jpg', 'F9ZErdyWcAATwvy.jpg', 'Fzex8oIWAAMlcYD.jpg', 'FzzT1_yXwAA6FHt.jpg', 'F_4EfLCXQAAQams.jpg', 'F_EkD2AWwAErPQR.jpg', 'F_yxmwGXgAEhve7.jpg', 'GA7CtsBXQAAVTcF.jpg', 'GACYHvpXkAAjzx6.jpg', 'GAHFow8aEAAnRP2.jpg', 'GAuLuiCX0AAZqeZ.png', 'GBFj1sqWIAAx5Wx.jpg', 'GCNxBPaWAAAshPb.jpg', 'GD0fuN8WkAEwC3p.jpg', 'GDabdbjWsAApY7B.jpg', 'GDgNpHaWkAEyltV.jpg', 'GDk2eRCWAAApg_6.jpg', 'GDp79o0XEAElriY.jpg', 'GDQpEcoW8AEyTt-.jpg', 'GDWARziWMAArnD7.jpg', 'GF1cD_PWYAABDvo.jpg', 'GF6FRg8WwAAtSU6.jpg', 'GFBuem9WMAAUA2W.jpg', 'GFRKvQvbEAEx_If.jpg', 'GFwNOogWAAAr7sK.png', 'GFWWSJJXUAAYZW9.png', 'GGPAe9TXIAA5pBV.jpg', 'GHhaYdnWYAApr_e.jpg', 'GHnowEeWEAAho53.jpg', 'GHXi-K2XoAA9CAl.jpg', 'GIo_eSIXsAA5ntG.jpg', 'GJJahQGWYAAVQf9.jpg', 'GJnTvifXoAA_bAe.jpg', 'GK0Yb_uWwAA5xXF.jpg', 'GK5we9EWUAE_ACb.jpg', 'GLDvCtSWUAAqUyY.jpg', 'GLdXUSMXAAAZw_g.jpg', 'GLitW8WXQAAn61z.jpg', 'GLORRkyWMAA6pqH.jpg', 'GLt6Q3QWgAAKLaY.jpg', 'GLTIe31WwAAXYNz.jpg', 'GLyOu3FW4AArsFs.jpg', 'GLYP2dkWsAAh9Et.jpg', 'GMbnmg5W0AEtgUZ.jpg', 'GMHFR-pWwAELpKg.jpg', 'GMhMDaAWAAAzNQ5.jpg', 'GMRmTUjWQAAjhc1.jpg', 'GMWszM5XkAAqSoe.jpg', 'GNJ3oXGWYAA67hp.jpg', 'GOhKkj9XkAAloxx.jpg', 'GOrqSTIWAAAbTME.jpg', 'GPgBPFsWIAAlUAk.jpg']
const randomIndex = Math.floor(Math.random() * manualFileNames.length);


window.onload = function() {
    manualFileNames[randomIndex]
}

/*
window.onload = function() {
    getRandomImage().then(imageSrc => {
        imageHTML.src = `./src/images/${imageSrc.split('.')[0]}.png`; // Correctly extract filename without timestamp
    });
}

function getRandomImage() {
    return fetch('./src/images') // Replace if necessary
    .then(response => response.text())
    .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const links = Array.from(doc.querySelectorAll('a'));
            const fileLinks = links.filter(link => link.href.endsWith('.png')); // Adjust the filter based on the file types you're interested in
            const filenames = fileLinks.map(link => link.textContent.trim().split('.')[0]); // Extract filename part before extension
            const randomIndex = Math.floor(Math.random() * filenames.length);
            const manualFileNames = ['F-1BycJWQAAHGbh.jpg', 'F0I8GimWwAA-CbV.jpg', 'F0sZZZmXoAAvaNM.jpg', 'F1LA8DyWcAExYam.jpg', 'F2nrBjnXoAkk9CG.jpg', 'F3bTgMuXIAExemQ.jpg', 'F3GmfClXoAUAGHV.jpg', 'F3ROOsRWkAAn4Be.jpg', 'F3WWWIPWAAAMetI.jpg', 'F86clJWW0AAgBoI.jpg', 'F93Z3O0XkAAg6va.jpg', 'F94FdNrWYAAR6dq.jpg', 'F9EB6A6XsAA4LiH.jpg', 'F9nS4BqWoAA9-YQ.jpg', 'F9ZErdyWcAATwvy.jpg', 'Fzex8oIWAAMlcYD.jpg', 'FzzT1_yXwAA6FHt.jpg', 'F_4EfLCXQAAQams.jpg', 'F_EkD2AWwAErPQR.jpg', 'F_yxmwGXgAEhve7.jpg', 'GA7CtsBXQAAVTcF.jpg', 'GACYHvpXkAAjzx6.jpg', 'GAHFow8aEAAnRP2.jpg', 'GAuLuiCX0AAZqeZ.png', 'GBFj1sqWIAAx5Wx.jpg', 'GCNxBPaWAAAshPb.jpg', 'GD0fuN8WkAEwC3p.jpg', 'GDabdbjWsAApY7B.jpg', 'GDgNpHaWkAEyltV.jpg', 'GDk2eRCWAAApg_6.jpg', 'GDp79o0XEAElriY.jpg', 'GDQpEcoW8AEyTt-.jpg', 'GDWARziWMAArnD7.jpg', 'GF1cD_PWYAABDvo.jpg', 'GF6FRg8WwAAtSU6.jpg', 'GFBuem9WMAAUA2W.jpg', 'GFRKvQvbEAEx_If.jpg', 'GFwNOogWAAAr7sK.png', 'GFWWSJJXUAAYZW9.png', 'GGPAe9TXIAA5pBV.jpg', 'GHhaYdnWYAApr_e.jpg', 'GHnowEeWEAAho53.jpg', 'GHXi-K2XoAA9CAl.jpg', 'GIo_eSIXsAA5ntG.jpg', 'GJJahQGWYAAVQf9.jpg', 'GJnTvifXoAA_bAe.jpg', 'GK0Yb_uWwAA5xXF.jpg', 'GK5we9EWUAE_ACb.jpg', 'GLDvCtSWUAAqUyY.jpg', 'GLdXUSMXAAAZw_g.jpg', 'GLitW8WXQAAn61z.jpg', 'GLORRkyWMAA6pqH.jpg', 'GLt6Q3QWgAAKLaY.jpg', 'GLTIe31WwAAXYNz.jpg', 'GLyOu3FW4AArsFs.jpg', 'GLYP2dkWsAAh9Et.jpg', 'GMbnmg5W0AEtgUZ.jpg', 'GMHFR-pWwAELpKg.jpg', 'GMhMDaAWAAAzNQ5.jpg', 'GMRmTUjWQAAjhc1.jpg', 'GMWszM5XkAAqSoe.jpg', 'GNJ3oXGWYAA67hp.jpg', 'GOhKkj9XkAAloxx.jpg', 'GOrqSTIWAAAbTME.jpg', 'GPgBPFsWIAAlUAk.jpg']
            return filenames[randomIndex];
        })
    .catch(error => {
            console.error('Error fetching directory:', error);
            throw error; // Rethrow error so it can be caught outside
        });
}*/
