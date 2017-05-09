// URL used to access Neo4j REST API to execute queries.
popoto.rest.CYPHER_URL = "http://10.1.2.18:7474/db/data/transaction/commit";
popoto.rest.AUTHORIZATION = "Basic bmVvNGo6aGFsbXVsdGljb20=";
popoto.provider.nodeProviders = {
    "Nutrient":{
        returnAttributes:["name"],
        constraintAttribute:"name",
    },
    "Country":{
        returnAttributes:["ISOCode", "name", "ISOAlpha3", "ISOAlpha2"],
        constraintAttribute:"ISOCode",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Symptom":{
        returnAttributes:["symptom"],
        constraintAttribute:"symptom",
    },
    "World_Bank_Group":{
        returnAttributes:["link_code", "name", "abbreviation", "org_code", "url"],
        constraintAttribute:"link_code",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["abbreviation"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["abbreviation"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Tissue_Type":{
        returnAttributes:["tissue_id", "tissue_type"],
        constraintAttribute:"tissue_id",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["tissue_type"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["tissue_type"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Continent":{
        returnAttributes:["ISOCode", "name"],
        constraintAttribute:"ISOCode",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "ICD_10":{
        returnAttributes:["authority", "icd_version", "name", "description", "url"],
        constraintAttribute:"authority",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "UN_Organs":{
        returnAttributes:["link_code", "name", "abbreviation", "org_code", "url"],
        constraintAttribute:"link_code",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Tissue":{
        returnAttributes:["tissue_link", "tissue_id", "gland_type", "tissue", "tissue_type", "tissue_location"],
        //constraintAttribute:"tissue_link",
        constraintAttribute:"tissue",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["tissue"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["tissue"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Nutrients":{
        returnAttributes:["name"],
        constraintAttribute:"name",
    },
    "ICD_Chapter":{
        returnAttributes:["icd_chapter", "icd_chapter_name", "icd_version"],
        constraintAttribute:"icd_chapter",
    },
    "UN_Specialized_Agencies":{
        returnAttributes:["link_code", "name", "abbreviation", "org_code", "url"],
        constraintAttribute:"link_code",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Pathogens":{
        returnAttributes:["name"],
        constraintAttribute:"name",
    },
    "Indicator":{
        returnAttributes:["indicator", "alias"],
        constraintAttribute:"indicator",
    },
    "ICD_Section":{
        returnAttributes:["section_begin", "name", "section_end", "icd_section"],
        constraintAttribute:"section_begin",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Related_Organizations":{
        returnAttributes:["link_code", "name", "abbreviation", "org_code", "url"],
        constraintAttribute:"link_code",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Bacteria":{
        returnAttributes:["bacteria", "scientific_name", "common_name"],
        constraintAttribute:"bacteria",
    },
    "ICD_Code":{
        returnAttributes:["icd_code", "link_code", "diagnosis", "reportable"],
        constraintAttribute:"icd_code",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["diagnosis"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["diagnosis"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Sicknesses":{
        returnAttributes:["name"],
        constraintAttribute:"name",
    },
    "Mineral":{
        returnAttributes:["symbol", "common_name"],
        constraintAttribute:"symbol",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["common_name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["common_name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Continent_Region":{
        returnAttributes:["ISOCode", "name"],
        constraintAttribute:"ISOCode",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Organization":{
        returnAttributes:["link_code", "name", "abbreviation", "org_code", "url"],
        constraintAttribute:"link_code",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["name"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["name"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Parasite":{
        returnAttributes:["parasite", "scientific_name", "common_name"],
        constraintAttribute:"parasite",
    },
    "Sickness":{
        returnAttributes:["sickness"],
        constraintAttribute:"sickness",
    },
    "World":{
        returnAttributes:["ISOCode", "name"],
        constraintAttribute:"ISOCode",
    },
    "Symptoms":{
        returnAttributes:["name"],
        constraintAttribute:"name",
    },
    "Gland":{
        returnAttributes:["main_function", "gland"],
        constraintAttribute:"main_function",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["gland"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["gland"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Pathogen":{
        returnAttributes:["pathogen"],
        constraintAttribute:"pathogen",
    },
    "Hormone":{
        returnAttributes:["amino_acids", "structure", "Principal_Source", "hormone"],
        constraintAttribute:"amino_acids",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["hormone"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["hormone"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
    "Vitamin":{
        returnAttributes:["common_name"],
        constraintAttribute:"common_name",
    },
    "Indicators":{
        returnAttributes:["name"],
        constraintAttribute:"name",
    },
    "Chemical_class":{
        returnAttributes:["chemical_subclass", "chemical_class"],
        constraintAttribute:"chemical_subclass",
        "getTextValue": function (node) {
            var text;
            if (node.type === popoto.graph.node.NodeTypes.VALUE) {
                text = "" + node.attributes["chemical_class"];
            } else {
                if (node.value === undefined) {
                    text = node.label;
                } else {
                    text = "" + node.value.attributes["chemical_class"];
                }
            }
            // Text is truncated to avoid node overflow
            return text.substring(0, 12);
        },
    },
};


	/* ****************
		Add a listener on result received to update map.
	*/
	popoto.result.onGraphResultReceived(
		function (graphResultObject) {

			var nodes = convertNodes(graphResultObject.nodes);
			var edges = convertEdges(graphResultObject.edges);
			var container = document.getElementById('vis_graph');

			// provide the data in the vis format
			var data = {
				nodes: nodes,
				edges: edges
			};
			var options = {
				nodes: {
					shape: 'circle',
					borderWidth: 2,
					size: 20,
					font: {
						size: 10,
						color: '#4d4d4d'
					}
				},
				edges: {
					shadow: {
						enabled: false,
						size: 5
					},
					length: 200,
					font: {
						align: 'top',
						size: 10,
						color: '#4d4d4d'
					},
					arrows: 'to'
				},
				groups: {
					useDefaultGroups: true,
					"name": {
						color: {background: '#68BDF6', border: '#5CA8DB'}
					},
					"Hormone": {
						color: {background: '#FF756E', border: '#E06760'}
					}
				}
			};

			// initialize the network
			var network = new vis.Network(container, data, options);
		}
	);

    function convertNodes(nodes) {
        var convertedNodes = [];

        nodes.forEach(function (node) {
            var nodeLabel = node.labels[0];
			if (nodeLabel !== "name") {
				nodeLabel = node.properties[Object.keys(node.properties)[0]].substring(0,12);
			};

//var str = JSON.stringify(node);
//str = JSON.stringify(node, null, 4); // (Optional) beautiful indented output.
//console.log(str); // Logs output to dev tools console.
//alert(str); // Displays output using window.alert()

			// Obtain the text to display for the node
			//var txtNode = Object.keys(node.properties);
			//var txtIdx = Math.min(...txtNode.map(({ length }) => length));
			//console.log(txtNode);
			//alert(txtNode);

            convertedNodes.push({
                id: node.id,
                // label: (nodeLabel == "Nutrient" ? node.properties["name"] : node.properties["getTextValue"]),
                // label: ( typeof node.properties["name"] === 'undefined' ? node.properties[Object.keys(node.properties)[0]] : node.properties["name"]),
                label: nodeLabel,
                group: nodeLabel
            })
        });

        return convertedNodes;
    }

	function convertEdges(edges) {
		var convertedEdges = [];

		edges.forEach(function (edge) {
			convertedEdges.push({
				from: edge.startNode,
				to: edge.endNode,
				label: edge.type
			})
		});

		return convertedEdges;
	}


popoto.result.onTotalResultCount(function (count) {
    document.getElementById("result-total-count").innerHTML = "(" + count + ")";
});
popoto.logger.LEVEL = popoto.logger.LogLevels.INFO;
popoto.start("Nutrient");