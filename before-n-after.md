{
  "format_version": "1.2",
  "terraform_version": "1.11.3",
  "variables": {
    "domain": {
      "value": "dev.knox.surge.tools"
    },
    "profile": {
      "value": "knoxdev"
    },
    "region": {
      "value": "us-east-1"
    }
  },
  "planned_values": {
    "root_module": {
      "child_modules": [
        {
          "resources": [
            {
              "address": "module.route53.aws_route53_zone.primary",
              "mode": "managed",
              "type": "aws_route53_zone",
              "name": "primary",
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "arn": "arn:aws:route53:::hostedzone/Z02948371NBPIC6JLDZP1",
                "comment": "Managed by Terraform",
                "delegation_set_id": "",
                "force_destroy": false,
                "id": "Z02948371NBPIC6JLDZP1",
                "name": "dev.knox.surge.tools",
                "name_servers": [
                  "ns-1233.awsdns-26.org",
                  "ns-2016.awsdns-60.co.uk",
                  "ns-370.awsdns-46.com",
                  "ns-966.awsdns-56.net"
                ],
                "primary_name_server": "ns-1233.awsdns-26.org",
                "tags": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "tags_all": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "timeouts": null,
                "vpc": [],
                "zone_id": "Z02948371NBPIC6JLDZP1"
              },
              "sensitive_values": {
                "name_servers": [
                  false,
                  false,
                  false,
                  false
                ],
                "tags": {},
                "tags_all": {},
                "vpc": []
              }
            }
          ],
          "address": "module.route53"
        },
        {
          "resources": [
            {
              "address": "module.vpc.aws_eip.gw[0]",
              "mode": "managed",
              "type": "aws_eip",
              "name": "gw",
              "index": 0,
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "address": null,
                "allocation_id": "eipalloc-0a02372342200c4db",
                "arn": "arn:aws:ec2:us-east-1:534326774172:elastic-ip/eipalloc-0a02372342200c4db",
                "associate_with_private_ip": null,
                "association_id": "",
                "carrier_ip": "",
                "customer_owned_ip": "",
                "customer_owned_ipv4_pool": "",
                "domain": "vpc",
                "id": "eipalloc-0a02372342200c4db",
                "instance": "",
                "ipam_pool_id": null,
                "network_border_group": "us-east-1",
                "network_interface": "",
                "private_dns": null,
                "private_ip": "",
                "ptr_record": "",
                "public_dns": "ec2-52-1-99-61.compute-1.amazonaws.com",
                "public_ip": "52.1.99.61",
                "public_ipv4_pool": "amazon",
                "tags": {},
                "tags_all": {},
                "timeouts": null,
                "vpc": true
              },
              "sensitive_values": {
                "tags": {},
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_internet_gateway.gw",
              "mode": "managed",
              "type": "aws_internet_gateway",
              "name": "gw",
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "arn": "arn:aws:ec2:us-east-1:534326774172:internet-gateway/igw-0be66744a07adad43",
                "id": "igw-0be66744a07adad43",
                "owner_id": "534326774172",
                "tags": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "tags_all": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "timeouts": null,
                "vpc_id": "vpc-090408e7d02d4e24a"
              },
              "sensitive_values": {
                "tags": {},
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_nat_gateway.nat[0]",
              "mode": "managed",
              "type": "aws_nat_gateway",
              "name": "nat",
              "index": 0,
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "allocation_id": "eipalloc-0a02372342200c4db",
                "connectivity_type": "public",
                "secondary_allocation_ids": null,
                "tags": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "tags_all": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "timeouts": null
              },
              "sensitive_values": {
                "secondary_private_ip_addresses": [],
                "tags": {},
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_route_table.private[0]",
              "mode": "managed",
              "type": "aws_route_table",
              "name": "private",
              "index": 0,
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "route": [
                  {
                    "carrier_gateway_id": "",
                    "cidr_block": "0.0.0.0/0",
                    "core_network_arn": "",
                    "destination_prefix_list_id": "",
                    "egress_only_gateway_id": "",
                    "gateway_id": "",
                    "ipv6_cidr_block": "",
                    "local_gateway_id": "",
                    "network_interface_id": "",
                    "transit_gateway_id": "",
                    "vpc_endpoint_id": "",
                    "vpc_peering_connection_id": ""
                  }
                ],
                "tags": null,
                "timeouts": null,
                "vpc_id": "vpc-090408e7d02d4e24a"
              },
              "sensitive_values": {
                "propagating_vgws": [],
                "route": [
                  {}
                ],
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_route_table_association.private[0]",
              "mode": "managed",
              "type": "aws_route_table_association",
              "name": "private",
              "index": 0,
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "gateway_id": null,
                "timeouts": null
              },
              "sensitive_values": {}
            },
            {
              "address": "module.vpc.aws_security_group.lb",
              "mode": "managed",
              "type": "aws_security_group",
              "name": "lb",
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 1,
              "values": {
                "arn": "arn:aws:ec2:us-east-1:534326774172:security-group/sg-009cf1dbfc71a52ad",
                "description": "Allow TLS inbound traffic and all outbound traffic",
                "egress": [
                  {
                    "cidr_blocks": [
                      "0.0.0.0/0"
                    ],
                    "description": "",
                    "from_port": 0,
                    "ipv6_cidr_blocks": [
                      "::/0"
                    ],
                    "prefix_list_ids": [],
                    "protocol": "-1",
                    "security_groups": [],
                    "self": false,
                    "to_port": 0
                  }
                ],
                "id": "sg-009cf1dbfc71a52ad",
                "ingress": [
                  {
                    "cidr_blocks": [
                      "10.0.0.0/16"
                    ],
                    "description": "",
                    "from_port": 443,
                    "ipv6_cidr_blocks": [],
                    "prefix_list_ids": [],
                    "protocol": "tcp",
                    "security_groups": [],
                    "self": false,
                    "to_port": 443
                  }
                ],
                "name": "lb",
                "name_prefix": "",
                "owner_id": "534326774172",
                "revoke_rules_on_delete": false,
                "tags": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "tags_all": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "timeouts": null,
                "vpc_id": "vpc-090408e7d02d4e24a"
              },
              "sensitive_values": {
                "egress": [
                  {
                    "cidr_blocks": [
                      false
                    ],
                    "ipv6_cidr_blocks": [
                      false
                    ],
                    "prefix_list_ids": [],
                    "security_groups": []
                  }
                ],
                "ingress": [
                  {
                    "cidr_blocks": [
                      false
                    ],
                    "ipv6_cidr_blocks": [],
                    "prefix_list_ids": [],
                    "security_groups": []
                  }
                ],
                "tags": {},
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_subnet.private[0]",
              "mode": "managed",
              "type": "aws_subnet",
              "name": "private",
              "index": 0,
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 1,
              "values": {
                "assign_ipv6_address_on_creation": false,
                "availability_zone": "us-east-1a",
                "cidr_block": "10.0.0.0/20",
                "customer_owned_ipv4_pool": null,
                "enable_dns64": false,
                "enable_lni_at_device_index": null,
                "enable_resource_name_dns_a_record_on_launch": false,
                "enable_resource_name_dns_aaaa_record_on_launch": false,
                "ipv6_cidr_block": null,
                "ipv6_native": false,
                "map_customer_owned_ip_on_launch": null,
                "map_public_ip_on_launch": false,
                "outpost_arn": null,
                "tags": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "tags_all": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "timeouts": null,
                "vpc_id": "vpc-090408e7d02d4e24a"
              },
              "sensitive_values": {
                "tags": {},
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_subnet.public[0]",
              "mode": "managed",
              "type": "aws_subnet",
              "name": "public",
              "index": 0,
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 1,
              "values": {
                "assign_ipv6_address_on_creation": false,
                "availability_zone": "us-east-1a",
                "cidr_block": "10.0.128.0/20",
                "customer_owned_ipv4_pool": null,
                "enable_dns64": false,
                "enable_lni_at_device_index": null,
                "enable_resource_name_dns_a_record_on_launch": false,
                "enable_resource_name_dns_aaaa_record_on_launch": false,
                "ipv6_cidr_block": null,
                "ipv6_native": false,
                "map_customer_owned_ip_on_launch": null,
                "map_public_ip_on_launch": true,
                "outpost_arn": null,
                "tags": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "tags_all": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "timeouts": null,
                "vpc_id": "vpc-090408e7d02d4e24a"
              },
              "sensitive_values": {
                "tags": {},
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_vpc.main",
              "mode": "managed",
              "type": "aws_vpc",
              "name": "main",
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 1,
              "values": {
                "arn": "arn:aws:ec2:us-east-1:534326774172:vpc/vpc-090408e7d02d4e24a",
                "assign_generated_ipv6_cidr_block": false,
                "cidr_block": "10.0.0.0/16",
                "default_network_acl_id": "acl-0c40649277a983701",
                "default_route_table_id": "rtb-0acc10c41e4dc7684",
                "default_security_group_id": "sg-05ffefbe77a93aa0b",
                "dhcp_options_id": "dopt-028c503aa859e0df1",
                "enable_dns_hostnames": false,
                "enable_dns_support": true,
                "enable_network_address_usage_metrics": false,
                "id": "vpc-090408e7d02d4e24a",
                "instance_tenancy": "default",
                "ipv4_ipam_pool_id": null,
                "ipv4_netmask_length": null,
                "ipv6_association_id": "",
                "ipv6_cidr_block": "",
                "ipv6_cidr_block_network_border_group": "",
                "ipv6_ipam_pool_id": "",
                "ipv6_netmask_length": 0,
                "main_route_table_id": "rtb-0acc10c41e4dc7684",
                "owner_id": "534326774172",
                "tags": {
                  "environment": "dev",
                  "provisioner": "terraform"
                },
                "tags_all": {
                  "environment": "dev",
                  "provisioner": "terraform"
                }
              },
              "sensitive_values": {
                "tags": {},
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_vpc_security_group_egress_rule.allow_all_traffic_ipv4",
              "mode": "managed",
              "type": "aws_vpc_security_group_egress_rule",
              "name": "allow_all_traffic_ipv4",
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0a5bc9af62568b494",
                "cidr_ipv4": "0.0.0.0/0",
                "cidr_ipv6": null,
                "description": null,
                "from_port": null,
                "id": "sgr-0a5bc9af62568b494",
                "ip_protocol": "-1",
                "prefix_list_id": null,
                "referenced_security_group_id": null,
                "security_group_id": "sg-009cf1dbfc71a52ad",
                "security_group_rule_id": "sgr-0a5bc9af62568b494",
                "tags": null,
                "tags_all": {},
                "to_port": null
              },
              "sensitive_values": {
                "tags_all": {}
              }
            },
            {
              "address": "module.vpc.aws_vpc_security_group_ingress_rule.allow_tls_ipv4",
              "mode": "managed",
              "type": "aws_vpc_security_group_ingress_rule",
              "name": "allow_tls_ipv4",
              "provider_name": "registry.terraform.io/hashicorp/aws",
              "schema_version": 0,
              "values": {
                "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0ae1f547f1411b152",
                "cidr_ipv4": "10.0.0.0/16",
                "cidr_ipv6": null,
                "description": null,
                "from_port": 443,
                "id": "sgr-0ae1f547f1411b152",
                "ip_protocol": "tcp",
                "prefix_list_id": null,
                "referenced_security_group_id": null,
                "security_group_id": "sg-009cf1dbfc71a52ad",
                "security_group_rule_id": "sgr-0ae1f547f1411b152",
                "tags": null,
                "tags_all": {},
                "to_port": 443
              },
              "sensitive_values": {
                "tags_all": {}
              }
            }
          ],
          "address": "module.vpc"
        }
      ]
    }
  },
  "resource_drift": [
    {
      "address": "module.vpc.aws_eip.gw[0]",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_eip",
      "name": "gw",
      "index": 0,
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "update"
        ],
        "before": {
          "address": null,
          "allocation_id": "eipalloc-0a02372342200c4db",
          "arn": "arn:aws:ec2:us-east-1:534326774172:elastic-ip/eipalloc-0a02372342200c4db",
          "associate_with_private_ip": null,
          "association_id": "",
          "carrier_ip": "",
          "customer_owned_ip": "",
          "customer_owned_ipv4_pool": "",
          "domain": "vpc",
          "id": "eipalloc-0a02372342200c4db",
          "instance": "",
          "ipam_pool_id": null,
          "network_border_group": "us-east-1",
          "network_interface": "",
          "private_dns": null,
          "private_ip": "",
          "ptr_record": "",
          "public_dns": "ec2-52-1-99-61.compute-1.amazonaws.com",
          "public_ip": "52.1.99.61",
          "public_ipv4_pool": "amazon",
          "tags": null,
          "tags_all": {},
          "timeouts": null,
          "vpc": true
        },
        "after": {
          "address": null,
          "allocation_id": "eipalloc-0a02372342200c4db",
          "arn": "arn:aws:ec2:us-east-1:534326774172:elastic-ip/eipalloc-0a02372342200c4db",
          "associate_with_private_ip": null,
          "association_id": "",
          "carrier_ip": "",
          "customer_owned_ip": "",
          "customer_owned_ipv4_pool": "",
          "domain": "vpc",
          "id": "eipalloc-0a02372342200c4db",
          "instance": "",
          "ipam_pool_id": null,
          "network_border_group": "us-east-1",
          "network_interface": "",
          "private_dns": null,
          "private_ip": "",
          "ptr_record": "",
          "public_dns": "ec2-52-1-99-61.compute-1.amazonaws.com",
          "public_ip": "52.1.99.61",
          "public_ipv4_pool": "amazon",
          "tags": {},
          "tags_all": {},
          "timeouts": null,
          "vpc": true
        },
        "after_unknown": {},
        "before_sensitive": {
          "tags_all": {}
        },
        "after_sensitive": {
          "tags": {},
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_security_group.lb",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_security_group",
      "name": "lb",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "update"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group/sg-009cf1dbfc71a52ad",
          "description": "Allow TLS inbound traffic and all outbound traffic",
          "egress": [],
          "id": "sg-009cf1dbfc71a52ad",
          "ingress": [],
          "name": "lb",
          "name_prefix": "",
          "owner_id": "534326774172",
          "revoke_rules_on_delete": false,
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group/sg-009cf1dbfc71a52ad",
          "description": "Allow TLS inbound traffic and all outbound traffic",
          "egress": [
            {
              "cidr_blocks": [
                "0.0.0.0/0"
              ],
              "description": "",
              "from_port": 0,
              "ipv6_cidr_blocks": [
                "::/0"
              ],
              "prefix_list_ids": [],
              "protocol": "-1",
              "security_groups": [],
              "self": false,
              "to_port": 0
            }
          ],
          "id": "sg-009cf1dbfc71a52ad",
          "ingress": [
            {
              "cidr_blocks": [
                "10.0.0.0/16"
              ],
              "description": "",
              "from_port": 443,
              "ipv6_cidr_blocks": [],
              "prefix_list_ids": [],
              "protocol": "tcp",
              "security_groups": [],
              "self": false,
              "to_port": 443
            }
          ],
          "name": "lb",
          "name_prefix": "",
          "owner_id": "534326774172",
          "revoke_rules_on_delete": false,
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after_unknown": {},
        "before_sensitive": {
          "egress": [],
          "ingress": [],
          "tags": {},
          "tags_all": {}
        },
        "after_sensitive": {
          "egress": [
            {
              "cidr_blocks": [
                false
              ],
              "ipv6_cidr_blocks": [
                false
              ],
              "prefix_list_ids": [],
              "security_groups": []
            }
          ],
          "ingress": [
            {
              "cidr_blocks": [
                false
              ],
              "ipv6_cidr_blocks": [],
              "prefix_list_ids": [],
              "security_groups": []
            }
          ],
          "tags": {},
          "tags_all": {}
        }
      }
    }
  ],
  "resource_changes": [
    {
      "address": "module.route53.aws_route53_zone.primary",
      "module_address": "module.route53",
      "mode": "managed",
      "type": "aws_route53_zone",
      "name": "primary",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "no-op"
        ],
        "before": {
          "arn": "arn:aws:route53:::hostedzone/Z02948371NBPIC6JLDZP1",
          "comment": "Managed by Terraform",
          "delegation_set_id": "",
          "force_destroy": false,
          "id": "Z02948371NBPIC6JLDZP1",
          "name": "dev.knox.surge.tools",
          "name_servers": [
            "ns-1233.awsdns-26.org",
            "ns-2016.awsdns-60.co.uk",
            "ns-370.awsdns-46.com",
            "ns-966.awsdns-56.net"
          ],
          "primary_name_server": "ns-1233.awsdns-26.org",
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc": [],
          "zone_id": "Z02948371NBPIC6JLDZP1"
        },
        "after": {
          "arn": "arn:aws:route53:::hostedzone/Z02948371NBPIC6JLDZP1",
          "comment": "Managed by Terraform",
          "delegation_set_id": "",
          "force_destroy": false,
          "id": "Z02948371NBPIC6JLDZP1",
          "name": "dev.knox.surge.tools",
          "name_servers": [
            "ns-1233.awsdns-26.org",
            "ns-2016.awsdns-60.co.uk",
            "ns-370.awsdns-46.com",
            "ns-966.awsdns-56.net"
          ],
          "primary_name_server": "ns-1233.awsdns-26.org",
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc": [],
          "zone_id": "Z02948371NBPIC6JLDZP1"
        },
        "after_unknown": {},
        "before_sensitive": {
          "name_servers": [
            false,
            false,
            false,
            false
          ],
          "tags": {},
          "tags_all": {},
          "vpc": []
        },
        "after_sensitive": {
          "name_servers": [
            false,
            false,
            false,
            false
          ],
          "tags": {},
          "tags_all": {},
          "vpc": []
        }
      }
    },
    {
      "address": "module.vpc.aws_eip.gw[0]",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_eip",
      "name": "gw",
      "index": 0,
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "no-op"
        ],
        "before": {
          "address": null,
          "allocation_id": "eipalloc-0a02372342200c4db",
          "arn": "arn:aws:ec2:us-east-1:534326774172:elastic-ip/eipalloc-0a02372342200c4db",
          "associate_with_private_ip": null,
          "association_id": "",
          "carrier_ip": "",
          "customer_owned_ip": "",
          "customer_owned_ipv4_pool": "",
          "domain": "vpc",
          "id": "eipalloc-0a02372342200c4db",
          "instance": "",
          "ipam_pool_id": null,
          "network_border_group": "us-east-1",
          "network_interface": "",
          "private_dns": null,
          "private_ip": "",
          "ptr_record": "",
          "public_dns": "ec2-52-1-99-61.compute-1.amazonaws.com",
          "public_ip": "52.1.99.61",
          "public_ipv4_pool": "amazon",
          "tags": {},
          "tags_all": {},
          "timeouts": null,
          "vpc": true
        },
        "after": {
          "address": null,
          "allocation_id": "eipalloc-0a02372342200c4db",
          "arn": "arn:aws:ec2:us-east-1:534326774172:elastic-ip/eipalloc-0a02372342200c4db",
          "associate_with_private_ip": null,
          "association_id": "",
          "carrier_ip": "",
          "customer_owned_ip": "",
          "customer_owned_ipv4_pool": "",
          "domain": "vpc",
          "id": "eipalloc-0a02372342200c4db",
          "instance": "",
          "ipam_pool_id": null,
          "network_border_group": "us-east-1",
          "network_interface": "",
          "private_dns": null,
          "private_ip": "",
          "ptr_record": "",
          "public_dns": "ec2-52-1-99-61.compute-1.amazonaws.com",
          "public_ip": "52.1.99.61",
          "public_ipv4_pool": "amazon",
          "tags": {},
          "tags_all": {},
          "timeouts": null,
          "vpc": true
        },
        "after_unknown": {},
        "before_sensitive": {
          "tags": {},
          "tags_all": {}
        },
        "after_sensitive": {
          "tags": {},
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_internet_gateway.gw",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_internet_gateway",
      "name": "gw",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "no-op"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:internet-gateway/igw-0be66744a07adad43",
          "id": "igw-0be66744a07adad43",
          "owner_id": "534326774172",
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:internet-gateway/igw-0be66744a07adad43",
          "id": "igw-0be66744a07adad43",
          "owner_id": "534326774172",
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after_unknown": {},
        "before_sensitive": {
          "tags": {},
          "tags_all": {}
        },
        "after_sensitive": {
          "tags": {},
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_nat_gateway.nat[0]",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_nat_gateway",
      "name": "nat",
      "index": 0,
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "create"
        ],
        "before": null,
        "after": {
          "allocation_id": "eipalloc-0a02372342200c4db",
          "connectivity_type": "public",
          "secondary_allocation_ids": null,
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null
        },
        "after_unknown": {
          "association_id": true,
          "id": true,
          "network_interface_id": true,
          "private_ip": true,
          "public_ip": true,
          "secondary_private_ip_address_count": true,
          "secondary_private_ip_addresses": true,
          "subnet_id": true,
          "tags": {},
          "tags_all": {}
        },
        "before_sensitive": false,
        "after_sensitive": {
          "secondary_private_ip_addresses": [],
          "tags": {},
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_route_table.private[0]",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_route_table",
      "name": "private",
      "index": 0,
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "create"
        ],
        "before": null,
        "after": {
          "route": [
            {
              "carrier_gateway_id": "",
              "cidr_block": "0.0.0.0/0",
              "core_network_arn": "",
              "destination_prefix_list_id": "",
              "egress_only_gateway_id": "",
              "gateway_id": "",
              "ipv6_cidr_block": "",
              "local_gateway_id": "",
              "network_interface_id": "",
              "transit_gateway_id": "",
              "vpc_endpoint_id": "",
              "vpc_peering_connection_id": ""
            }
          ],
          "tags": null,
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after_unknown": {
          "arn": true,
          "id": true,
          "owner_id": true,
          "propagating_vgws": true,
          "route": [
            {
              "nat_gateway_id": true
            }
          ],
          "tags_all": true
        },
        "before_sensitive": false,
        "after_sensitive": {
          "propagating_vgws": [],
          "route": [
            {}
          ],
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_route_table_association.private[0]",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_route_table_association",
      "name": "private",
      "index": 0,
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "create"
        ],
        "before": null,
        "after": {
          "gateway_id": null,
          "timeouts": null
        },
        "after_unknown": {
          "id": true,
          "route_table_id": true,
          "subnet_id": true
        },
        "before_sensitive": false,
        "after_sensitive": {}
      }
    },
    {
      "address": "module.vpc.aws_security_group.lb",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_security_group",
      "name": "lb",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "no-op"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group/sg-009cf1dbfc71a52ad",
          "description": "Allow TLS inbound traffic and all outbound traffic",
          "egress": [
            {
              "cidr_blocks": [
                "0.0.0.0/0"
              ],
              "description": "",
              "from_port": 0,
              "ipv6_cidr_blocks": [
                "::/0"
              ],
              "prefix_list_ids": [],
              "protocol": "-1",
              "security_groups": [],
              "self": false,
              "to_port": 0
            }
          ],
          "id": "sg-009cf1dbfc71a52ad",
          "ingress": [
            {
              "cidr_blocks": [
                "10.0.0.0/16"
              ],
              "description": "",
              "from_port": 443,
              "ipv6_cidr_blocks": [],
              "prefix_list_ids": [],
              "protocol": "tcp",
              "security_groups": [],
              "self": false,
              "to_port": 443
            }
          ],
          "name": "lb",
          "name_prefix": "",
          "owner_id": "534326774172",
          "revoke_rules_on_delete": false,
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group/sg-009cf1dbfc71a52ad",
          "description": "Allow TLS inbound traffic and all outbound traffic",
          "egress": [
            {
              "cidr_blocks": [
                "0.0.0.0/0"
              ],
              "description": "",
              "from_port": 0,
              "ipv6_cidr_blocks": [
                "::/0"
              ],
              "prefix_list_ids": [],
              "protocol": "-1",
              "security_groups": [],
              "self": false,
              "to_port": 0
            }
          ],
          "id": "sg-009cf1dbfc71a52ad",
          "ingress": [
            {
              "cidr_blocks": [
                "10.0.0.0/16"
              ],
              "description": "",
              "from_port": 443,
              "ipv6_cidr_blocks": [],
              "prefix_list_ids": [],
              "protocol": "tcp",
              "security_groups": [],
              "self": false,
              "to_port": 443
            }
          ],
          "name": "lb",
          "name_prefix": "",
          "owner_id": "534326774172",
          "revoke_rules_on_delete": false,
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after_unknown": {},
        "before_sensitive": {
          "egress": [
            {
              "cidr_blocks": [
                false
              ],
              "ipv6_cidr_blocks": [
                false
              ],
              "prefix_list_ids": [],
              "security_groups": []
            }
          ],
          "ingress": [
            {
              "cidr_blocks": [
                false
              ],
              "ipv6_cidr_blocks": [],
              "prefix_list_ids": [],
              "security_groups": []
            }
          ],
          "tags": {},
          "tags_all": {}
        },
        "after_sensitive": {
          "egress": [
            {
              "cidr_blocks": [
                false
              ],
              "ipv6_cidr_blocks": [
                false
              ],
              "prefix_list_ids": [],
              "security_groups": []
            }
          ],
          "ingress": [
            {
              "cidr_blocks": [
                false
              ],
              "ipv6_cidr_blocks": [],
              "prefix_list_ids": [],
              "security_groups": []
            }
          ],
          "tags": {},
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_subnet.private[0]",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_subnet",
      "name": "private",
      "index": 0,
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "delete",
          "create"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:subnet/subnet-0f983e0b28c794359",
          "assign_ipv6_address_on_creation": false,
          "availability_zone": "us-east-1a",
          "availability_zone_id": "use1-az4",
          "cidr_block": "10.0.0.0/24",
          "customer_owned_ipv4_pool": "",
          "enable_dns64": false,
          "enable_lni_at_device_index": 0,
          "enable_resource_name_dns_a_record_on_launch": false,
          "enable_resource_name_dns_aaaa_record_on_launch": false,
          "id": "subnet-0f983e0b28c794359",
          "ipv6_cidr_block": "",
          "ipv6_cidr_block_association_id": "",
          "ipv6_native": false,
          "map_customer_owned_ip_on_launch": false,
          "map_public_ip_on_launch": false,
          "outpost_arn": "",
          "owner_id": "534326774172",
          "private_dns_hostname_type_on_launch": "ip-name",
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after": {
          "assign_ipv6_address_on_creation": false,
          "availability_zone": "us-east-1a",
          "cidr_block": "10.0.0.0/20",
          "customer_owned_ipv4_pool": null,
          "enable_dns64": false,
          "enable_lni_at_device_index": null,
          "enable_resource_name_dns_a_record_on_launch": false,
          "enable_resource_name_dns_aaaa_record_on_launch": false,
          "ipv6_cidr_block": null,
          "ipv6_native": false,
          "map_customer_owned_ip_on_launch": null,
          "map_public_ip_on_launch": false,
          "outpost_arn": null,
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after_unknown": {
          "arn": true,
          "availability_zone_id": true,
          "id": true,
          "ipv6_cidr_block_association_id": true,
          "owner_id": true,
          "private_dns_hostname_type_on_launch": true,
          "tags": {},
          "tags_all": {}
        },
        "before_sensitive": {
          "tags": {},
          "tags_all": {}
        },
        "after_sensitive": {
          "tags": {},
          "tags_all": {}
        },
        "replace_paths": [
          [
            "cidr_block"
          ]
        ]
      },
      "action_reason": "replace_because_cannot_update"
    },
    {
      "address": "module.vpc.aws_subnet.public[0]",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_subnet",
      "name": "public",
      "index": 0,
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "create"
        ],
        "before": null,
        "after": {
          "assign_ipv6_address_on_creation": false,
          "availability_zone": "us-east-1a",
          "cidr_block": "10.0.128.0/20",
          "customer_owned_ipv4_pool": null,
          "enable_dns64": false,
          "enable_lni_at_device_index": null,
          "enable_resource_name_dns_a_record_on_launch": false,
          "enable_resource_name_dns_aaaa_record_on_launch": false,
          "ipv6_cidr_block": null,
          "ipv6_native": false,
          "map_customer_owned_ip_on_launch": null,
          "map_public_ip_on_launch": true,
          "outpost_arn": null,
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "timeouts": null,
          "vpc_id": "vpc-090408e7d02d4e24a"
        },
        "after_unknown": {
          "arn": true,
          "availability_zone_id": true,
          "id": true,
          "ipv6_cidr_block_association_id": true,
          "owner_id": true,
          "private_dns_hostname_type_on_launch": true,
          "tags": {},
          "tags_all": {}
        },
        "before_sensitive": false,
        "after_sensitive": {
          "tags": {},
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_vpc.main",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_vpc",
      "name": "main",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "no-op"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:vpc/vpc-090408e7d02d4e24a",
          "assign_generated_ipv6_cidr_block": false,
          "cidr_block": "10.0.0.0/16",
          "default_network_acl_id": "acl-0c40649277a983701",
          "default_route_table_id": "rtb-0acc10c41e4dc7684",
          "default_security_group_id": "sg-05ffefbe77a93aa0b",
          "dhcp_options_id": "dopt-028c503aa859e0df1",
          "enable_dns_hostnames": false,
          "enable_dns_support": true,
          "enable_network_address_usage_metrics": false,
          "id": "vpc-090408e7d02d4e24a",
          "instance_tenancy": "default",
          "ipv4_ipam_pool_id": null,
          "ipv4_netmask_length": null,
          "ipv6_association_id": "",
          "ipv6_cidr_block": "",
          "ipv6_cidr_block_network_border_group": "",
          "ipv6_ipam_pool_id": "",
          "ipv6_netmask_length": 0,
          "main_route_table_id": "rtb-0acc10c41e4dc7684",
          "owner_id": "534326774172",
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          }
        },
        "after": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:vpc/vpc-090408e7d02d4e24a",
          "assign_generated_ipv6_cidr_block": false,
          "cidr_block": "10.0.0.0/16",
          "default_network_acl_id": "acl-0c40649277a983701",
          "default_route_table_id": "rtb-0acc10c41e4dc7684",
          "default_security_group_id": "sg-05ffefbe77a93aa0b",
          "dhcp_options_id": "dopt-028c503aa859e0df1",
          "enable_dns_hostnames": false,
          "enable_dns_support": true,
          "enable_network_address_usage_metrics": false,
          "id": "vpc-090408e7d02d4e24a",
          "instance_tenancy": "default",
          "ipv4_ipam_pool_id": null,
          "ipv4_netmask_length": null,
          "ipv6_association_id": "",
          "ipv6_cidr_block": "",
          "ipv6_cidr_block_network_border_group": "",
          "ipv6_ipam_pool_id": "",
          "ipv6_netmask_length": 0,
          "main_route_table_id": "rtb-0acc10c41e4dc7684",
          "owner_id": "534326774172",
          "tags": {
            "environment": "dev",
            "provisioner": "terraform"
          },
          "tags_all": {
            "environment": "dev",
            "provisioner": "terraform"
          }
        },
        "after_unknown": {},
        "before_sensitive": {
          "tags": {},
          "tags_all": {}
        },
        "after_sensitive": {
          "tags": {},
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_vpc_security_group_egress_rule.allow_all_traffic_ipv4",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_vpc_security_group_egress_rule",
      "name": "allow_all_traffic_ipv4",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "no-op"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0a5bc9af62568b494",
          "cidr_ipv4": "0.0.0.0/0",
          "cidr_ipv6": null,
          "description": null,
          "from_port": null,
          "id": "sgr-0a5bc9af62568b494",
          "ip_protocol": "-1",
          "prefix_list_id": null,
          "referenced_security_group_id": null,
          "security_group_id": "sg-009cf1dbfc71a52ad",
          "security_group_rule_id": "sgr-0a5bc9af62568b494",
          "tags": null,
          "tags_all": {},
          "to_port": null
        },
        "after": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0a5bc9af62568b494",
          "cidr_ipv4": "0.0.0.0/0",
          "cidr_ipv6": null,
          "description": null,
          "from_port": null,
          "id": "sgr-0a5bc9af62568b494",
          "ip_protocol": "-1",
          "prefix_list_id": null,
          "referenced_security_group_id": null,
          "security_group_id": "sg-009cf1dbfc71a52ad",
          "security_group_rule_id": "sgr-0a5bc9af62568b494",
          "tags": null,
          "tags_all": {},
          "to_port": null
        },
        "after_unknown": {},
        "before_sensitive": {
          "tags_all": {}
        },
        "after_sensitive": {
          "tags_all": {}
        }
      }
    },
    {
      "address": "module.vpc.aws_vpc_security_group_egress_rule.allow_all_traffic_ipv6",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_vpc_security_group_egress_rule",
      "name": "allow_all_traffic_ipv6",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "delete"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-05662291e3c3ebff6",
          "cidr_ipv4": null,
          "cidr_ipv6": "::/0",
          "description": null,
          "from_port": null,
          "id": "sgr-05662291e3c3ebff6",
          "ip_protocol": "-1",
          "prefix_list_id": null,
          "referenced_security_group_id": null,
          "security_group_id": "sg-009cf1dbfc71a52ad",
          "security_group_rule_id": "sgr-05662291e3c3ebff6",
          "tags": null,
          "tags_all": {},
          "to_port": null
        },
        "after": null,
        "after_unknown": {},
        "before_sensitive": {
          "tags_all": {}
        },
        "after_sensitive": false
      },
      "action_reason": "delete_because_no_resource_config"
    },
    {
      "address": "module.vpc.aws_vpc_security_group_ingress_rule.allow_tls_ipv4",
      "module_address": "module.vpc",
      "mode": "managed",
      "type": "aws_vpc_security_group_ingress_rule",
      "name": "allow_tls_ipv4",
      "provider_name": "registry.terraform.io/hashicorp/aws",
      "change": {
        "actions": [
          "no-op"
        ],
        "before": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0ae1f547f1411b152",
          "cidr_ipv4": "10.0.0.0/16",
          "cidr_ipv6": null,
          "description": null,
          "from_port": 443,
          "id": "sgr-0ae1f547f1411b152",
          "ip_protocol": "tcp",
          "prefix_list_id": null,
          "referenced_security_group_id": null,
          "security_group_id": "sg-009cf1dbfc71a52ad",
          "security_group_rule_id": "sgr-0ae1f547f1411b152",
          "tags": null,
          "tags_all": {},
          "to_port": 443
        },
        "after": {
          "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0ae1f547f1411b152",
          "cidr_ipv4": "10.0.0.0/16",
          "cidr_ipv6": null,
          "description": null,
          "from_port": 443,
          "id": "sgr-0ae1f547f1411b152",
          "ip_protocol": "tcp",
          "prefix_list_id": null,
          "referenced_security_group_id": null,
          "security_group_id": "sg-009cf1dbfc71a52ad",
          "security_group_rule_id": "sgr-0ae1f547f1411b152",
          "tags": null,
          "tags_all": {},
          "to_port": 443
        },
        "after_unknown": {},
        "before_sensitive": {
          "tags_all": {}
        },
        "after_sensitive": {
          "tags_all": {}
        }
      }
    }
  ],
  "prior_state": {
    "format_version": "1.0",
    "terraform_version": "1.11.3",
    "values": {
      "root_module": {
        "child_modules": [
          {
            "resources": [
              {
                "address": "module.route53.aws_route53_zone.primary",
                "mode": "managed",
                "type": "aws_route53_zone",
                "name": "primary",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 0,
                "values": {
                  "arn": "arn:aws:route53:::hostedzone/Z02948371NBPIC6JLDZP1",
                  "comment": "Managed by Terraform",
                  "delegation_set_id": "",
                  "force_destroy": false,
                  "id": "Z02948371NBPIC6JLDZP1",
                  "name": "dev.knox.surge.tools",
                  "name_servers": [
                    "ns-1233.awsdns-26.org",
                    "ns-2016.awsdns-60.co.uk",
                    "ns-370.awsdns-46.com",
                    "ns-966.awsdns-56.net"
                  ],
                  "primary_name_server": "ns-1233.awsdns-26.org",
                  "tags": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "tags_all": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "timeouts": null,
                  "vpc": [],
                  "zone_id": "Z02948371NBPIC6JLDZP1"
                },
                "sensitive_values": {
                  "name_servers": [
                    false,
                    false,
                    false,
                    false
                  ],
                  "tags": {},
                  "tags_all": {},
                  "vpc": []
                }
              }
            ],
            "address": "module.route53"
          },
          {
            "resources": [
              {
                "address": "module.vpc.data.aws_availability_zones.available",
                "mode": "data",
                "type": "aws_availability_zones",
                "name": "available",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 0,
                "values": {
                  "all_availability_zones": null,
                  "exclude_names": null,
                  "exclude_zone_ids": null,
                  "filter": null,
                  "group_names": [
                    "us-east-1-zg-1"
                  ],
                  "id": "us-east-1",
                  "names": [
                    "us-east-1a",
                    "us-east-1b",
                    "us-east-1c",
                    "us-east-1d",
                    "us-east-1e",
                    "us-east-1f"
                  ],
                  "state": null,
                  "timeouts": null,
                  "zone_ids": [
                    "use1-az4",
                    "use1-az6",
                    "use1-az1",
                    "use1-az2",
                    "use1-az3",
                    "use1-az5"
                  ]
                },
                "sensitive_values": {
                  "group_names": [
                    false
                  ],
                  "names": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                  ],
                  "zone_ids": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                  ]
                }
              },
              {
                "address": "module.vpc.aws_eip.gw[0]",
                "mode": "managed",
                "type": "aws_eip",
                "name": "gw",
                "index": 0,
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 0,
                "values": {
                  "address": null,
                  "allocation_id": "eipalloc-0a02372342200c4db",
                  "arn": "arn:aws:ec2:us-east-1:534326774172:elastic-ip/eipalloc-0a02372342200c4db",
                  "associate_with_private_ip": null,
                  "association_id": "",
                  "carrier_ip": "",
                  "customer_owned_ip": "",
                  "customer_owned_ipv4_pool": "",
                  "domain": "vpc",
                  "id": "eipalloc-0a02372342200c4db",
                  "instance": "",
                  "ipam_pool_id": null,
                  "network_border_group": "us-east-1",
                  "network_interface": "",
                  "private_dns": null,
                  "private_ip": "",
                  "ptr_record": "",
                  "public_dns": "ec2-52-1-99-61.compute-1.amazonaws.com",
                  "public_ip": "52.1.99.61",
                  "public_ipv4_pool": "amazon",
                  "tags": {},
                  "tags_all": {},
                  "timeouts": null,
                  "vpc": true
                },
                "sensitive_values": {
                  "tags": {},
                  "tags_all": {}
                },
                "depends_on": [
                  "module.vpc.aws_internet_gateway.gw",
                  "module.vpc.aws_vpc.main"
                ]
              },
              {
                "address": "module.vpc.aws_internet_gateway.gw",
                "mode": "managed",
                "type": "aws_internet_gateway",
                "name": "gw",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 0,
                "values": {
                  "arn": "arn:aws:ec2:us-east-1:534326774172:internet-gateway/igw-0be66744a07adad43",
                  "id": "igw-0be66744a07adad43",
                  "owner_id": "534326774172",
                  "tags": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "tags_all": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "timeouts": null,
                  "vpc_id": "vpc-090408e7d02d4e24a"
                },
                "sensitive_values": {
                  "tags": {},
                  "tags_all": {}
                },
                "depends_on": [
                  "module.vpc.aws_vpc.main"
                ]
              },
              {
                "address": "module.vpc.aws_security_group.lb",
                "mode": "managed",
                "type": "aws_security_group",
                "name": "lb",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 1,
                "values": {
                  "arn": "arn:aws:ec2:us-east-1:534326774172:security-group/sg-009cf1dbfc71a52ad",
                  "description": "Allow TLS inbound traffic and all outbound traffic",
                  "egress": [
                    {
                      "cidr_blocks": [
                        "0.0.0.0/0"
                      ],
                      "description": "",
                      "from_port": 0,
                      "ipv6_cidr_blocks": [
                        "::/0"
                      ],
                      "prefix_list_ids": [],
                      "protocol": "-1",
                      "security_groups": [],
                      "self": false,
                      "to_port": 0
                    }
                  ],
                  "id": "sg-009cf1dbfc71a52ad",
                  "ingress": [
                    {
                      "cidr_blocks": [
                        "10.0.0.0/16"
                      ],
                      "description": "",
                      "from_port": 443,
                      "ipv6_cidr_blocks": [],
                      "prefix_list_ids": [],
                      "protocol": "tcp",
                      "security_groups": [],
                      "self": false,
                      "to_port": 443
                    }
                  ],
                  "name": "lb",
                  "name_prefix": "",
                  "owner_id": "534326774172",
                  "revoke_rules_on_delete": false,
                  "tags": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "tags_all": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "timeouts": null,
                  "vpc_id": "vpc-090408e7d02d4e24a"
                },
                "sensitive_values": {
                  "egress": [
                    {
                      "cidr_blocks": [
                        false
                      ],
                      "ipv6_cidr_blocks": [
                        false
                      ],
                      "prefix_list_ids": [],
                      "security_groups": []
                    }
                  ],
                  "ingress": [
                    {
                      "cidr_blocks": [
                        false
                      ],
                      "ipv6_cidr_blocks": [],
                      "prefix_list_ids": [],
                      "security_groups": []
                    }
                  ],
                  "tags": {},
                  "tags_all": {}
                },
                "depends_on": [
                  "module.vpc.aws_vpc.main"
                ]
              },
              {
                "address": "module.vpc.aws_subnet.private[0]",
                "mode": "managed",
                "type": "aws_subnet",
                "name": "private",
                "index": 0,
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 1,
                "values": {
                  "arn": "arn:aws:ec2:us-east-1:534326774172:subnet/subnet-0f983e0b28c794359",
                  "assign_ipv6_address_on_creation": false,
                  "availability_zone": "us-east-1a",
                  "availability_zone_id": "use1-az4",
                  "cidr_block": "10.0.0.0/24",
                  "customer_owned_ipv4_pool": "",
                  "enable_dns64": false,
                  "enable_lni_at_device_index": 0,
                  "enable_resource_name_dns_a_record_on_launch": false,
                  "enable_resource_name_dns_aaaa_record_on_launch": false,
                  "id": "subnet-0f983e0b28c794359",
                  "ipv6_cidr_block": "",
                  "ipv6_cidr_block_association_id": "",
                  "ipv6_native": false,
                  "map_customer_owned_ip_on_launch": false,
                  "map_public_ip_on_launch": false,
                  "outpost_arn": "",
                  "owner_id": "534326774172",
                  "private_dns_hostname_type_on_launch": "ip-name",
                  "tags": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "tags_all": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "timeouts": null,
                  "vpc_id": "vpc-090408e7d02d4e24a"
                },
                "sensitive_values": {
                  "tags": {},
                  "tags_all": {}
                },
                "depends_on": [
                  "module.vpc.aws_vpc.main",
                  "module.vpc.data.aws_availability_zones.available"
                ]
              },
              {
                "address": "module.vpc.aws_vpc.main",
                "mode": "managed",
                "type": "aws_vpc",
                "name": "main",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 1,
                "values": {
                  "arn": "arn:aws:ec2:us-east-1:534326774172:vpc/vpc-090408e7d02d4e24a",
                  "assign_generated_ipv6_cidr_block": false,
                  "cidr_block": "10.0.0.0/16",
                  "default_network_acl_id": "acl-0c40649277a983701",
                  "default_route_table_id": "rtb-0acc10c41e4dc7684",
                  "default_security_group_id": "sg-05ffefbe77a93aa0b",
                  "dhcp_options_id": "dopt-028c503aa859e0df1",
                  "enable_dns_hostnames": false,
                  "enable_dns_support": true,
                  "enable_network_address_usage_metrics": false,
                  "id": "vpc-090408e7d02d4e24a",
                  "instance_tenancy": "default",
                  "ipv4_ipam_pool_id": null,
                  "ipv4_netmask_length": null,
                  "ipv6_association_id": "",
                  "ipv6_cidr_block": "",
                  "ipv6_cidr_block_network_border_group": "",
                  "ipv6_ipam_pool_id": "",
                  "ipv6_netmask_length": 0,
                  "main_route_table_id": "rtb-0acc10c41e4dc7684",
                  "owner_id": "534326774172",
                  "tags": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  },
                  "tags_all": {
                    "environment": "dev",
                    "provisioner": "terraform"
                  }
                },
                "sensitive_values": {
                  "tags": {},
                  "tags_all": {}
                }
              },
              {
                "address": "module.vpc.aws_vpc_security_group_egress_rule.allow_all_traffic_ipv4",
                "mode": "managed",
                "type": "aws_vpc_security_group_egress_rule",
                "name": "allow_all_traffic_ipv4",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 0,
                "values": {
                  "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0a5bc9af62568b494",
                  "cidr_ipv4": "0.0.0.0/0",
                  "cidr_ipv6": null,
                  "description": null,
                  "from_port": null,
                  "id": "sgr-0a5bc9af62568b494",
                  "ip_protocol": "-1",
                  "prefix_list_id": null,
                  "referenced_security_group_id": null,
                  "security_group_id": "sg-009cf1dbfc71a52ad",
                  "security_group_rule_id": "sgr-0a5bc9af62568b494",
                  "tags": null,
                  "tags_all": {},
                  "to_port": null
                },
                "sensitive_values": {
                  "tags_all": {}
                },
                "depends_on": [
                  "module.vpc.aws_security_group.lb",
                  "module.vpc.aws_vpc.main"
                ]
              },
              {
                "address": "module.vpc.aws_vpc_security_group_egress_rule.allow_all_traffic_ipv6",
                "mode": "managed",
                "type": "aws_vpc_security_group_egress_rule",
                "name": "allow_all_traffic_ipv6",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 0,
                "values": {
                  "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-05662291e3c3ebff6",
                  "cidr_ipv4": null,
                  "cidr_ipv6": "::/0",
                  "description": null,
                  "from_port": null,
                  "id": "sgr-05662291e3c3ebff6",
                  "ip_protocol": "-1",
                  "prefix_list_id": null,
                  "referenced_security_group_id": null,
                  "security_group_id": "sg-009cf1dbfc71a52ad",
                  "security_group_rule_id": "sgr-05662291e3c3ebff6",
                  "tags": null,
                  "tags_all": {},
                  "to_port": null
                },
                "sensitive_values": {
                  "tags_all": {}
                },
                "depends_on": [
                  "module.vpc.aws_security_group.lb",
                  "module.vpc.aws_vpc.main"
                ]
              },
              {
                "address": "module.vpc.aws_vpc_security_group_ingress_rule.allow_tls_ipv4",
                "mode": "managed",
                "type": "aws_vpc_security_group_ingress_rule",
                "name": "allow_tls_ipv4",
                "provider_name": "registry.terraform.io/hashicorp/aws",
                "schema_version": 0,
                "values": {
                  "arn": "arn:aws:ec2:us-east-1:534326774172:security-group-rule/sgr-0ae1f547f1411b152",
                  "cidr_ipv4": "10.0.0.0/16",
                  "cidr_ipv6": null,
                  "description": null,
                  "from_port": 443,
                  "id": "sgr-0ae1f547f1411b152",
                  "ip_protocol": "tcp",
                  "prefix_list_id": null,
                  "referenced_security_group_id": null,
                  "security_group_id": "sg-009cf1dbfc71a52ad",
                  "security_group_rule_id": "sgr-0ae1f547f1411b152",
                  "tags": null,
                  "tags_all": {},
                  "to_port": 443
                },
                "sensitive_values": {
                  "tags_all": {}
                },
                "depends_on": [
                  "module.vpc.aws_security_group.lb",
                  "module.vpc.aws_vpc.main"
                ]
              }
            ],
            "address": "module.vpc"
          }
        ]
      }
    }
  },
  "configuration": {
    "provider_config": {
      "aws": {
        "name": "aws",
        "full_name": "registry.terraform.io/hashicorp/aws",
        "version_constraint": "5.93.0",
        "expressions": {
          "profile": {
            "references": [
              "var.profile"
            ]
          },
          "region": {
            "references": [
              "var.region"
            ]
          }
        }
      }
    },
    "root_module": {
      "module_calls": {
        "route53": {
          "source": "../../modules/route53",
          "expressions": {
            "context": {
              "references": [
                "local.context"
              ]
            },
            "domain": {
              "references": [
                "var.domain"
              ]
            },
            "tags": {
              "references": [
                "local.tags"
              ]
            }
          },
          "module": {
            "outputs": {
              "zone_id": {
                "expression": {
                  "references": [
                    "aws_route53_zone.primary.zone_id",
                    "aws_route53_zone.primary"
                  ]
                }
              }
            },
            "resources": [
              {
                "address": "aws_route53_zone.primary",
                "mode": "managed",
                "type": "aws_route53_zone",
                "name": "primary",
                "provider_config_key": "aws",
                "expressions": {
                  "name": {
                    "references": [
                      "var.domain"
                    ]
                  },
                  "tags": {
                    "references": [
                      "var.tags"
                    ]
                  }
                },
                "schema_version": 0
              }
            ],
            "variables": {
              "context": {
                "description": "The environment context for this operation"
              },
              "domain": {
                "description": "Domain name for the hosted zone"
              },
              "tags": {
                "description": "Tags for this resource"
              }
            }
          }
        },
        "vpc": {
          "source": "../../modules/vpc",
          "expressions": {
            "az_count": {
              "constant_value": 1
            },
            "context": {
              "references": [
                "local.context"
              ]
            },
            "tags": {
              "references": [
                "local.tags"
              ]
            }
          },
          "module": {
            "resources": [
              {
                "address": "aws_eip.gw",
                "mode": "managed",
                "type": "aws_eip",
                "name": "gw",
                "provider_config_key": "aws",
                "expressions": {
                  "domain": {
                    "constant_value": "vpc"
                  }
                },
                "schema_version": 0,
                "count_expression": {
                  "references": [
                    "var.az_count"
                  ]
                },
                "depends_on": [
                  "aws_internet_gateway.gw"
                ]
              },
              {
                "address": "aws_internet_gateway.gw",
                "mode": "managed",
                "type": "aws_internet_gateway",
                "name": "gw",
                "provider_config_key": "aws",
                "expressions": {
                  "tags": {
                    "references": [
                      "var.tags"
                    ]
                  },
                  "vpc_id": {
                    "references": [
                      "aws_vpc.main.id",
                      "aws_vpc.main"
                    ]
                  }
                },
                "schema_version": 0
              },
              {
                "address": "aws_nat_gateway.nat",
                "mode": "managed",
                "type": "aws_nat_gateway",
                "name": "nat",
                "provider_config_key": "aws",
                "expressions": {
                  "allocation_id": {
                    "references": [
                      "aws_eip.gw",
                      "count.index"
                    ]
                  },
                  "subnet_id": {
                    "references": [
                      "aws_subnet.public",
                      "count.index"
                    ]
                  },
                  "tags": {
                    "references": [
                      "var.tags"
                    ]
                  }
                },
                "schema_version": 0,
                "count_expression": {
                  "references": [
                    "var.az_count"
                  ]
                },
                "depends_on": [
                  "aws_internet_gateway.gw"
                ]
              },
              {
                "address": "aws_route_table.private",
                "mode": "managed",
                "type": "aws_route_table",
                "name": "private",
                "provider_config_key": "aws",
                "expressions": {
                  "route": {
                    "references": [
                      "aws_nat_gateway.nat",
                      "count.index"
                    ]
                  },
                  "vpc_id": {
                    "references": [
                      "aws_vpc.main.id",
                      "aws_vpc.main"
                    ]
                  }
                },
                "schema_version": 0,
                "count_expression": {
                  "references": [
                    "var.az_count"
                  ]
                }
              },
              {
                "address": "aws_route_table_association.private",
                "mode": "managed",
                "type": "aws_route_table_association",
                "name": "private",
                "provider_config_key": "aws",
                "expressions": {
                  "route_table_id": {
                    "references": [
                      "aws_route_table.private",
                      "count.index"
                    ]
                  },
                  "subnet_id": {
                    "references": [
                      "aws_subnet.private",
                      "count.index"
                    ]
                  }
                },
                "schema_version": 0,
                "count_expression": {
                  "references": [
                    "var.az_count"
                  ]
                }
              },
              {
                "address": "aws_security_group.lb",
                "mode": "managed",
                "type": "aws_security_group",
                "name": "lb",
                "provider_config_key": "aws",
                "expressions": {
                  "description": {
                    "constant_value": "Allow TLS inbound traffic and all outbound traffic"
                  },
                  "name": {
                    "constant_value": "lb"
                  },
                  "tags": {
                    "references": [
                      "var.tags"
                    ]
                  },
                  "vpc_id": {
                    "references": [
                      "aws_vpc.main.id",
                      "aws_vpc.main"
                    ]
                  }
                },
                "schema_version": 1
              },
              {
                "address": "aws_subnet.private",
                "mode": "managed",
                "type": "aws_subnet",
                "name": "private",
                "provider_config_key": "aws",
                "expressions": {
                  "availability_zone": {
                    "references": [
                      "data.aws_availability_zones.available.names",
                      "data.aws_availability_zones.available",
                      "count.index"
                    ]
                  },
                  "cidr_block": {
                    "references": [
                      "aws_vpc.main.cidr_block",
                      "aws_vpc.main",
                      "count.index"
                    ]
                  },
                  "tags": {
                    "references": [
                      "var.tags"
                    ]
                  },
                  "vpc_id": {
                    "references": [
                      "aws_vpc.main.id",
                      "aws_vpc.main"
                    ]
                  }
                },
                "schema_version": 1,
                "count_expression": {
                  "references": [
                    "var.az_count"
                  ]
                }
              },
              {
                "address": "aws_subnet.public",
                "mode": "managed",
                "type": "aws_subnet",
                "name": "public",
                "provider_config_key": "aws",
                "expressions": {
                  "availability_zone": {
                    "references": [
                      "data.aws_availability_zones.available.names",
                      "data.aws_availability_zones.available",
                      "count.index"
                    ]
                  },
                  "cidr_block": {
                    "references": [
                      "aws_vpc.main.cidr_block",
                      "aws_vpc.main",
                      "count.index"
                    ]
                  },
                  "map_public_ip_on_launch": {
                    "constant_value": true
                  },
                  "tags": {
                    "references": [
                      "var.tags"
                    ]
                  },
                  "vpc_id": {
                    "references": [
                      "aws_vpc.main.id",
                      "aws_vpc.main"
                    ]
                  }
                },
                "schema_version": 1,
                "count_expression": {
                  "references": [
                    "var.az_count"
                  ]
                }
              },
              {
                "address": "aws_vpc.main",
                "mode": "managed",
                "type": "aws_vpc",
                "name": "main",
                "provider_config_key": "aws",
                "expressions": {
                  "cidr_block": {
                    "constant_value": "10.0.0.0/16"
                  },
                  "tags": {
                    "references": [
                      "var.tags"
                    ]
                  }
                },
                "schema_version": 1
              },
              {
                "address": "aws_vpc_security_group_egress_rule.allow_all_traffic_ipv4",
                "mode": "managed",
                "type": "aws_vpc_security_group_egress_rule",
                "name": "allow_all_traffic_ipv4",
                "provider_config_key": "aws",
                "expressions": {
                  "cidr_ipv4": {
                    "constant_value": "0.0.0.0/0"
                  },
                  "ip_protocol": {
                    "constant_value": "-1"
                  },
                  "security_group_id": {
                    "references": [
                      "aws_security_group.lb.id",
                      "aws_security_group.lb"
                    ]
                  }
                },
                "schema_version": 0
              },
              {
                "address": "aws_vpc_security_group_ingress_rule.allow_tls_ipv4",
                "mode": "managed",
                "type": "aws_vpc_security_group_ingress_rule",
                "name": "allow_tls_ipv4",
                "provider_config_key": "aws",
                "expressions": {
                  "cidr_ipv4": {
                    "references": [
                      "aws_vpc.main.cidr_block",
                      "aws_vpc.main"
                    ]
                  },
                  "from_port": {
                    "constant_value": 443
                  },
                  "ip_protocol": {
                    "constant_value": "tcp"
                  },
                  "security_group_id": {
                    "references": [
                      "aws_security_group.lb.id",
                      "aws_security_group.lb"
                    ]
                  },
                  "to_port": {
                    "constant_value": 443
                  }
                },
                "schema_version": 0
              },
              {
                "address": "data.aws_availability_zones.available",
                "mode": "data",
                "type": "aws_availability_zones",
                "name": "available",
                "provider_config_key": "aws",
                "schema_version": 0
              }
            ],
            "variables": {
              "az_count": {
                "description": "No. of availability zones"
              },
              "context": {
                "description": "The environment context for this operation"
              },
              "tags": {
                "description": "Tags for this resource"
              }
            }
          }
        }
      },
      "variables": {
        "domain": {
          "description": "Domain used in the application"
        },
        "profile": {
          "default": "knoxdev",
          "description": "Profile to use with this environment"
        },
        "region": {
          "description": "Region of the application"
        }
      }
    }
  },
  "relevant_attributes": [
    {
      "resource": "module.vpc.aws_nat_gateway.nat",
      "attribute": []
    },
    {
      "resource": "module.vpc.aws_vpc.main",
      "attribute": [
        "cidr_block"
      ]
    },
    {
      "resource": "module.vpc.aws_vpc.main",
      "attribute": [
        "id"
      ]
    },
    {
      "resource": "module.vpc.data.aws_availability_zones.available",
      "attribute": [
        "names"
      ]
    },
    {
      "resource": "module.vpc.aws_route_table.private",
      "attribute": []
    },
    {
      "resource": "module.vpc.aws_eip.gw",
      "attribute": []
    },
    {
      "resource": "module.route53.aws_route53_zone.primary",
      "attribute": [
        "zone_id"
      ]
    },
    {
      "resource": "module.vpc.aws_subnet.private",
      "attribute": []
    },
    {
      "resource": "module.vpc.aws_subnet.public",
      "attribute": []
    }
  ],
  "timestamp": "2025-04-04T08:32:01Z",
  "applyable": true,
  "complete": true,
  "errored": false
}
