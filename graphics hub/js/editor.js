let canvas, image;
        let undoStack = [];
        let redoStack = [];

        function initializeFabric() {
            canvas = new fabric.Canvas('canvas', {
                width: 998,
                height: 600
            });
            saveState();
        }

        function loadImage(e) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = function(f) {
                fabric.Image.fromURL(f.target.result, function(img) {
                    canvas.clear();
                    image = img;
                    canvas.add(image);
                    canvas.centerObject(image);
                    image.setCoords();
                    canvas.renderAll();
                    saveState();
                });
            };
            reader.readAsDataURL(file);
        }

        // Your provided functions go here
        function applyFilter(filter) {
            if (!image) return;
            image.filters.push(filter);
            image.applyFilters();
            canvas.renderAll();
            saveState();
        }

        function saveState() {
            undoStack.push(JSON.stringify(canvas));
            redoStack = [];
        }

        function undo() {
            if (undoStack.length > 1) {
                redoStack.push(undoStack.pop());
                canvas.loadFromJSON(undoStack[undoStack.length - 1], canvas.renderAll.bind(canvas));
            }
        }

        function redo() {
            if (redoStack.length > 0) {
                undoStack.push(redoStack.pop());
                canvas.loadFromJSON(undoStack[undoStack.length - 1], canvas.renderAll.bind(canvas));
            }
        }

        // Your event listeners go here
        document.addEventListener('DOMContentLoaded', function() {
  initializeFabric();
  
  document.getElementById('imageUpload').addEventListener('change', loadImage);
  
  document.getElementById('brightnessUp').addEventListener('click', () => applyFilter(new fabric.Image.filters.Brightness({ brightness: 0.1 })));
  document.getElementById('brightnessDown').addEventListener('click', () => applyFilter(new fabric.Image.filters.Brightness({ brightness: -0.1 })));
  document.getElementById('contrastUp').addEventListener('click', () => applyFilter(new fabric.Image.filters.Contrast({ contrast: 0.1 })));
  document.getElementById('contrastDown').addEventListener('click', () => applyFilter(new fabric.Image.filters.Contrast({ contrast: -0.1 })));
  document.getElementById('saturationUp').addEventListener('click', () => applyFilter(new fabric.Image.filters.Saturation({ saturation: 0.1 })));
  document.getElementById('saturationDown').addEventListener('click', () => applyFilter(new fabric.Image.filters.Saturation({ saturation: -0.1 })));
  document.getElementById('grayscale').addEventListener('click', () => applyFilter(new fabric.Image.filters.Grayscale()));
  document.getElementById('sepia').addEventListener('click', () => applyFilter(new fabric.Image.filters.Sepia()));
  document.getElementById('invert').addEventListener('click', () => applyFilter(new fabric.Image.filters.Invert()));
  
  document.getElementById('crop').addEventListener('click', () => {
      // Implement cropping using Cropper.js
  });
  
  document.getElementById('rotate').addEventListener('click', () => {
      image.rotate(90);
      canvas.renderAll();
      saveState();
  });
  
  document.getElementById('flipH').addEventListener('click', () => {
      image.set('flipX', !image.flipX);
      canvas.renderAll();
      saveState();
  });
  
  document.getElementById('flipV').addEventListener('click', () => {
      image.set('flipY', !image.flipY);
      canvas.renderAll();
      saveState();
  });
  
  document.getElementById('draw').addEventListener('click', () => {
      canvas.isDrawingMode = !canvas.isDrawingMode;
  });
  
  document.getElementById('text').addEventListener('click', () => {
      const text = new fabric.IText('Enter text', {
          left: 50,
          top: 50,
          fontFamily: 'Arial',
          fill: '#000000',
          fontSize: 20
      });
      canvas.add(text);
      canvas.setActiveObject(text);
      saveState();
  });
  
  document.getElementById('resize').addEventListener('click', () => {
      const newWidth = prompt('Enter new width:', canvas.width);
      const newHeight = prompt('Enter new height:', canvas.height);
      if (newWidth && newHeight) {
          canvas.setWidth(parseInt(newWidth));
          canvas.setHeight(parseInt(newHeight));
          image.scaleToWidth(parseInt(newWidth));
          canvas.renderAll();
          saveState();
      }
  });
  
  document.getElementById('undo').addEventListener('click', undo);
  document.getElementById('redo').addEventListener('click', redo);
  
  document.getElementById('save').addEventListener('click', () => {
      canvas.toBlob(function(blob) {
          saveAs(blob, 'edited_image.png');
      });
  });
  
  document.getElementById('reset').addEventListener('click', () => {
      if (image) {
          canvas.clear();
          canvas.add(image);
          image.filters = [];
          image.applyFilters();
          canvas.renderAll();
          saveState();
      }
  });
});